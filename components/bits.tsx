"use client";

import * as React from "react";
import * as THREE from "three";

type BitsInput = number[][] | string[];

export type BitsProps = {
  /**
   * A bitmap using 1s and 0s.
   * - number[][]: each row is an array of 0/1
   * - string[]: each row like "010010"
   */
  bits?: BitsInput;
  /** Distance between points. */
  spacing?: number;
  /** Point size (world units, not pixels). */
  size?: number;
  /** Point color. */
  color?: THREE.ColorRepresentation;
  /** Opacity for points. */
  opacity?: number;
  /** Center the bitmap around (0,0,0). */
  centered?: boolean;
  /** Flip Y so first row is at the top visually. */
  invertY?: boolean;
  /** Optional z offset for all points. */
  z?: number;
};

function normalizeBits(bits: BitsInput): number[][] {
  if (Array.isArray(bits) && bits.length > 0 && typeof bits[0] === "string") {
    return (bits as string[]).map((row) =>
      row
        .trim()
        .split("")
        .map((c) => (c === "1" ? 1 : 0))
    );
  }
  return bits as number[][];
}

export const Bits: React.FC<BitsProps> = ({
  bits = [
    "0000000000",
    "0011111100",
    "0100000010",
    "0101111010",
    "0101001010",
    "0101111010",
    "0100000010",
    "0011111100",
    "0000000000",
  ],
  spacing = 0.12,
  size = 0.03,
  color = "#ffffff",
  opacity = 0.9,
  centered = true,
  invertY = true,
  z = 0,
}) => {
  const geometry = React.useMemo(() => {
    const grid = normalizeBits(bits);

    const rows = grid.length;
    const cols = Math.max(0, ...grid.map((r) => r.length));

    const positions: number[] = [];

    for (let r = 0; r < rows; r++) {
      const row = grid[r] ?? [];
      for (let c = 0; c < cols; c++) {
        const v = row[c] ?? 0;
        if (v !== 1) continue;

        const x = c * spacing;
        const y = (invertY ? rows - 1 - r : r) * spacing;

        positions.push(x, y, z);
      }
    }

    // Center around origin if desired
    if (centered && positions.length > 0) {
      const w = (cols - 1) * spacing;
      const h = (rows - 1) * spacing;
      const cx = w / 2;
      const cy = h / 2;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 0] -= cx;
        positions[i + 1] -= cy;
      }
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    g.computeBoundingSphere();
    return g;
  }, [bits, spacing, centered, invertY, z]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};
