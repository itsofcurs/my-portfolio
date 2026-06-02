/**
 * Utility functions for the constellation visualization.
 * Calculates radial positions for skill nodes around cluster cores.
 */

/**
 * Calculate position offsets for skill nodes arranged in a radial pattern.
 * Returns percentage offsets relative to the cluster core.
 */
export function getRadialPositions(
  count: number,
  radius: number = 6,
  startAngle: number = -90
): Array<{ dx: number; dy: number; angle: number }> {
  const positions: Array<{ dx: number; dy: number; angle: number }> = [];
  const angleStep = 360 / count;

  for (let i = 0; i < count; i++) {
    const angleDeg = startAngle + i * angleStep;
    const angleRad = (angleDeg * Math.PI) / 180;
    positions.push({
      dx: Math.cos(angleRad) * radius,
      dy: Math.sin(angleRad) * radius,
      angle: angleDeg,
    });
  }

  return positions;
}

/**
 * Determine optimal label position based on angle to avoid overlap.
 */
export function getLabelAnchor(
  angle: number
): 'start' | 'middle' | 'end' {
  const normalized = ((angle % 360) + 360) % 360;
  if (normalized > 60 && normalized < 120) return 'middle';
  if (normalized > 240 && normalized < 300) return 'middle';
  if (normalized >= 120 && normalized <= 240) return 'end';
  return 'start';
}
