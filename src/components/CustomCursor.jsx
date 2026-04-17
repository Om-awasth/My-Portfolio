import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], .interactive';
const TEXT_SELECTOR = 'input, textarea, [contenteditable="true"], [data-native-cursor="text"]';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(0);

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });

  const [isEnabled, setIsEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsFinePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);
    document.body.classList.add('custom-cursor-enabled');

    const animate = () => {
      dot.current.x += (mouse.current.x - dot.current.x) * 0.5;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.5;
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      const target = event.target;
      if (!(target instanceof Element)) {
        setIsHoveringInteractive(false);
        setIsTextMode(false);
        return;
      }

      const overInteractive = !!target.closest(INTERACTIVE_SELECTOR);
      const overTextInput = !!target.closest(TEXT_SELECTOR);

      setIsHoveringInteractive(overInteractive && !overTextInput);
      setIsTextMode(overTextInput);

      document.body.classList.toggle('cursor-text-mode', overTextInput);
    };

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);
    const handleWindowBlur = () => setIsPressed(false);
    const handlePointerLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };
    const handlePointerEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    mouse.current = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
    };
    dot.current = { ...mouse.current };
    ring.current = { ...mouse.current };

    rafRef.current = window.requestAnimationFrame(animate);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('mouseout', handlePointerLeave);
    window.addEventListener('mouseover', handlePointerEnter);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('mouseout', handlePointerLeave);
      window.removeEventListener('mouseover', handlePointerEnter);

      document.body.classList.remove('custom-cursor-enabled', 'cursor-text-mode');
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  const ringClassName = [
    'custom-cursor-ring',
    isHoveringInteractive ? 'is-hover' : '',
    isPressed ? 'is-pressed' : '',
    isTextMode ? 'is-hidden' : '',
  ].join(' ').trim();

  const dotClassName = [
    'custom-cursor-dot',
    isPressed ? 'is-pressed' : '',
    isTextMode ? 'is-hidden' : '',
  ].join(' ').trim();

  return (
    <>
      <div ref={ringRef} className={ringClassName} aria-hidden="true" />
      <div ref={dotRef} className={dotClassName} aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
