import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 220;
const STAR_COUNT = 260;
const LINK_DISTANCE = 2.9;

function buildParticlePositions(count) {
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);

  for (let index = 0; index < count; index += 1) {
    const ring = index % 2 === 0 ? 1 : -1;
    const radius = 5.4 + Math.random() * 3.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const positionIndex = index * 3;

    positions[positionIndex] = radius * Math.sin(phi) * Math.cos(theta) * (0.7 + Math.random() * 0.35);
    positions[positionIndex + 1] = radius * Math.sin(phi) * Math.sin(theta) * (0.7 + Math.random() * 0.35);
    positions[positionIndex + 2] = radius * Math.cos(phi) * 0.55 * ring;
    phases[index] = Math.random() * Math.PI * 2;
  }

  return { positions, phases };
}

function buildStarPositions(count) {
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const positionIndex = index * 3;
    const spread = 24;

    positions[positionIndex] = (Math.random() - 0.5) * spread;
    positions[positionIndex + 1] = (Math.random() - 0.5) * 16;
    positions[positionIndex + 2] = (Math.random() - 0.5) * spread;
  }

  return positions;
}

function buildLinkPositions(points) {
  const segments = [];
  const thresholdSq = LINK_DISTANCE * LINK_DISTANCE;

  for (let i = 0; i < points.length; i += 1) {
    let bestIndex = -1;
    let bestDistance = thresholdSq;

    for (let j = i + 1; j < points.length; j += 1) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dz = points[i].z - points[j].z;
      const distance = dx * dx + dy * dy + dz * dz;

      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = j;
      }
    }

    if (bestIndex !== -1) {
      segments.push(points[i].x, points[i].y, points[i].z, points[bestIndex].x, points[bestIndex].y, points[bestIndex].z);
    }
  }

  return new Float32Array(segments);
}

function AnimatedBackground() {
  const mountRef = useRef(null);

  const initialData = useMemo(() => buildParticlePositions(PARTICLE_COUNT), []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03060d, 0.03);

    const camera = new THREE.PerspectiveCamera(58, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.2, 13.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const motionGroup = new THREE.Group();
    root.add(motionGroup);

    const ambient = new THREE.AmbientLight(0x8aa4ff, 0.42);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0x6ea8ff, 2.4, 50, 2);
    keyLight.position.set(4.5, 5.8, 8.5);
    scene.add(keyLight);

    const accentLight = new THREE.PointLight(0x9f6bff, 1.8, 36, 2);
    accentLight.position.set(-5.5, -2.5, 5.5);
    scene.add(accentLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.55, 24, 2);
    rimLight.position.set(-2.2, 4.4, 7.2);
    scene.add(rimLight);

    const orbGroup = new THREE.Group();
    motionGroup.add(orbGroup);

    const coreGeometry = new THREE.IcosahedronGeometry(2.15, 3);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc7d2fe,
      emissive: 0x1e3a8a,
      emissiveIntensity: 0.2,
      metalness: 0.85,
      roughness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      transmission: 0.06,
      thickness: 0.8,
      wireframe: true,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    orbGroup.add(coreSphere);

    const glowGeometry = new THREE.SphereGeometry(1.18, 48, 48);
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x2563eb,
      emissiveIntensity: 0.45,
      transparent: true,
      opacity: 0.82,
      roughness: 0.18,
      metalness: 0.55,
    });
    const glowCore = new THREE.Mesh(glowGeometry, glowMaterial);
    orbGroup.add(glowCore);

    const haloGeometry = new THREE.TorusGeometry(3.15, 0.05, 16, 220);
    const haloMaterial = new THREE.MeshStandardMaterial({
      color: 0xbdd5ff,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.28,
      transparent: true,
      opacity: 0.78,
      metalness: 0.84,
      roughness: 0.18,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI / 2.25;
    halo.rotation.z = Math.PI / 4.8;
    orbGroup.add(halo);

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(initialData.positions, 3));
    particleGeometry.setAttribute("phase", new THREE.BufferAttribute(initialData.phases, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xeff6ff,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    motionGroup.add(particles);

    const particleVectors = [];
    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const positionIndex = index * 3;
      particleVectors.push(
        new THREE.Vector3(
          initialData.positions[positionIndex],
          initialData.positions[positionIndex + 1],
          initialData.positions[positionIndex + 2]
        )
      );
    }

    const linkGeometry = new THREE.BufferGeometry();
    const linkPositions = buildLinkPositions(particleVectors);
    linkGeometry.setAttribute("position", new THREE.BufferAttribute(linkPositions, 3));

    const linkMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const links = new THREE.LineSegments(linkGeometry, linkMaterial);
    motionGroup.add(links);

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(buildStarPositions(STAR_COUNT), 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.02,
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x23407a,
      transparent: true,
      opacity: 0.16,
    });

    for (let row = -5; row <= 5; row += 1) {
      const horizontalPoints = [new THREE.Vector3(-10, row * 0.9, -4), new THREE.Vector3(10, row * 0.9, -4)];
      const horizontalGeometry = new THREE.BufferGeometry().setFromPoints(horizontalPoints);
      gridGroup.add(new THREE.Line(horizontalGeometry, gridMaterial.clone()));
    }

    for (let col = -9; col <= 9; col += 1) {
      const verticalPoints = [new THREE.Vector3(col * 1.2, -6, -4), new THREE.Vector3(col * 1.2, 6, -4)];
      const verticalGeometry = new THREE.BufferGeometry().setFromPoints(verticalPoints);
      gridGroup.add(new THREE.Line(verticalGeometry, gridMaterial.clone()));
    }

    const overlayPlaneGeometry = new THREE.PlaneGeometry(30, 18, 1, 1);
    const overlayPlaneMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    });
    const overlayPlane = new THREE.Mesh(overlayPlaneGeometry, overlayPlaneMaterial);
    overlayPlane.position.z = -6;
    scene.add(overlayPlane);

    const mouseTarget = new THREE.Vector2(0, 0);
    const scrollOffset = { value: 0 };
    let targetScroll = 0;
    let rotationY = 0;
    let rafId = 0;
    let paused = false;

    const handleMouseMove = (event) => {
      mouseTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const handleScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      targetScroll = Math.min(window.scrollY / maxScroll, 1);
    };

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    };

    const handleVisibility = () => {
      paused = document.hidden;
    };

    const animate = () => {
      rafId = window.requestAnimationFrame(animate);
      if (paused) return;

      const time = performance.now() * 0.001;
      scrollOffset.value += (targetScroll - scrollOffset.value) * 0.04;

      root.rotation.x = 0.1 + Math.sin(time * 0.48) * 0.06 + scrollOffset.value * 0.22;
      rotationY += 0.0014;
      root.rotation.y = rotationY + mouseTarget.x * 0.28;

      motionGroup.rotation.x = mouseTarget.y * 0.14 + scrollOffset.value * 0.08;
      motionGroup.rotation.y = -mouseTarget.x * 0.14;

      orbGroup.rotation.z = Math.sin(time * 0.75) * 0.18;
      halo.rotation.y += 0.0024;
      halo.rotation.x = Math.PI / 2.25 + Math.sin(time * 0.42) * 0.05;

      coreSphere.rotation.z += 0.0011;
      glowCore.position.x = Math.sin(time * 0.72) * 0.14;
      glowCore.position.y = Math.cos(time * 0.84) * 0.12;

      particles.rotation.y -= 0.00035;
      particles.rotation.x += 0.00008;
      links.rotation.y -= 0.0003;
      stars.rotation.y += 0.00012;
      stars.rotation.x -= 0.00004;
      gridGroup.position.y = Math.sin(time * 0.45) * 0.08 + scrollOffset.value * -1.2;
      gridGroup.rotation.x = Math.PI / 2.1 + scrollOffset.value * 0.04;

      particleMaterial.opacity = 0.56 + (Math.abs(mouseTarget.x) + Math.abs(mouseTarget.y)) * 0.06;
      linkMaterial.opacity = 0.18 + (Math.abs(mouseTarget.x) + Math.abs(mouseTarget.y)) * 0.05;

      keyLight.position.x = 4.5 + mouseTarget.x * 1.4;
      keyLight.position.y = 5.8 + mouseTarget.y * 1.05 + scrollOffset.value * 1.4;
      accentLight.position.x = -5.5 + mouseTarget.x * -1.2;
      accentLight.position.y = -2.5 + mouseTarget.y * 0.85;
      rimLight.position.x = -2.2 + mouseTarget.x * 0.9;
      rimLight.position.y = 4.4 + mouseTarget.y * 0.7;

      overlayPlane.material.opacity = 0.12 + scrollOffset.value * 0.05;

      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    handleScroll();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);

      scene.remove(root);
      scene.remove(stars);
      scene.remove(gridGroup);
      scene.remove(overlayPlane);

      coreGeometry.dispose();
      coreMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      linkGeometry.dispose();
      linkMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      overlayPlaneGeometry.dispose();
      overlayPlaneMaterial.dispose();
      gridMaterial.dispose();
      renderer.dispose();

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [initialData]);

  return (
    <div className="animated-bg-root" aria-hidden="true">
      <div ref={mountRef} className="animated-bg-canvas" />
      <div className="animated-bg-vignette" />
      <div className="animated-bg-noise" />
      <div className="animated-bg-gradient" />
    </div>
  );
}

export default AnimatedBackground;