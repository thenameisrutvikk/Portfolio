import { useEffect, useRef } from "react";

const FireCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cursor = { x: mouse.x, y: mouse.y };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const handleResize = () => {
      setCanvasSize();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 1.6,
          speedY: (Math.random() - 0.5) * 1.6,
          life: 48,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth interpolation creates a cleaner premium cursor motion.
      cursor.x += (mouse.x - cursor.x) * 0.25;
      cursor.y += (mouse.y - cursor.y) * 0.25;

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life--;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(209,213,219,0.7)";
        ctx.fillStyle = `rgba(209,213,219,${particle.life / 48})`;
        ctx.fill();

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      // Outer ring
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, 12, 0, Math.PI * 2);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(209,213,219,0.75)";
      ctx.shadowBlur = 14;
      ctx.shadowColor = "rgba(209,213,219,0.45)";
      ctx.stroke();

      // Inner core dot
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(243,244,246,0.95)";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(255,255,255,0.6)";
      ctx.fill();

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-9999"
    />
  );
};

export default FireCursor;