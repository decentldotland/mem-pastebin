import React, { useEffect, useState } from 'react';

interface Paste {
  id: string;
  title: string;
  // Add more properties as needed based on your API response
}

const RecentPastes: React.FC = () => {
  const [recentPastes, setRecentPastes] = useState<Paste[]>([]);

  useEffect(() => {
    // Implement the API call to fetch the recent pastes
    // Update the 'recentPastes' state with the response data
  }, []);

  return (
    <section className="recent-pastes-section">
      <h2>Recent Pastes</h2>
      <ul>
        {/* Render the list of recent pastes */}
        {/* Each list item will link to the specific paste's view */}
        {recentPastes.map((paste) => (
          <li key={paste.id}>{paste.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecentPastes;
