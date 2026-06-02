'use client';

import { useState, useCallback } from 'react';

/**
 * Manages hover state for the constellation visualization.
 */
export function useConstellation() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  const handleClusterEnter = useCallback((id: string) => {
    setActiveCluster(id);
  }, []);

  const handleClusterLeave = useCallback(() => {
    setActiveCluster(null);
  }, []);

  const handleClusterToggle = useCallback((id: string) => {
    setActiveCluster((prev) => (prev === id ? null : id));
  }, []);

  return {
    activeCluster,
    handleClusterEnter,
    handleClusterLeave,
    handleClusterToggle,
  };
}
