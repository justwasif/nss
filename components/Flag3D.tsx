"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Flag3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025, 0.025, 4.3, 16),
      new THREE.MeshStandardMaterial({ color: 0xd6ad32, metalness: 0.55, roughness: 0.3 })
    );
    pole.position.set(-2.02, 0, 0);
    group.add(pole);

    const finial = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xffc20e, metalness: 0.65, roughness: 0.22 })
    );
    finial.position.set(-2.02, 2.18, 0);
    group.add(finial);

    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#ff8a18";
    ctx.fillRect(0, 0, 900, 200);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 200, 900, 200);
    ctx.fillStyle = "#138808";
    ctx.fillRect(0, 400, 900, 200);

    ctx.strokeStyle = "#000080";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(450, 300, 60, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(450, 300);
      ctx.lineTo(450 + Math.cos(a) * 60, 300 + Math.sin(a) * 60);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    const geometry = new THREE.PlaneGeometry(3.85, 2.57, 52, 28);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      roughness: 0.82
    });

    const flag = new THREE.Mesh(geometry, material);
    flag.position.set(-0.05, 0.9, 0);
    group.add(flag);

    const positions = geometry.attributes.position as THREE.BufferAttribute;
    const base = Float32Array.from(positions.array as ArrayLike<number>);

    scene.add(new THREE.AmbientLight(0xffffff, 1.9));
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(3, 4, 5);
    scene.add(light);

    const clock = new THREE.Clock();
    let frame = 0;

    const resize = () => {
      const width = mount.clientWidth || 500;
      const height = mount.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      const t = clock.getElapsedTime();
      for (let i = 0; i < positions.count; i++) {
        const x = base[i * 3];
        const y = base[i * 3 + 1];
        const normalizedX = (x + 1.925) / 3.85;
        const wave = Math.sin(t * 2.4 + normalizedX * 9 + y * 1.8) * 0.15 * (0.2 + normalizedX);
        positions.setZ(i, base[i * 3 + 2] + wave);
      }
      positions.needsUpdate = true;
      flag.rotation.y = Math.sin(t * 0.55) * 0.045;
      group.rotation.y = -0.12 + Math.sin(t * 0.25) * 0.035;
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="flag-canvas" aria-label="Fluttering Indian flag" />;
}