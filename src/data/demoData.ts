export type Player = {
  id: string; name: string; position: string; team: string; points: number;
  goals: number; assists: number; plusMinus: number; trend: 'up' | 'down' | 'steady';
};

export const players: Player[] = [
  { id: 'mcdavid', name: 'Connor McDavid', position: 'C', team: 'EDM', points: 92, goals: 31, assists: 61, plusMinus: 18, trend: 'up' },
  { id: 'mackinnon', name: 'Nathan MacKinnon', position: 'C', team: 'COL', points: 88, goals: 36, assists: 52, plusMinus: 14, trend: 'up' },
  { id: 'panarin', name: 'Artemi Panarin', position: 'LW', team: 'NYR', points: 79, goals: 29, assists: 50, plusMinus: 12, trend: 'steady' },
  { id: 'hughes', name: 'Quinn Hughes', position: 'D', team: 'VAN', points: 68, goals: 10, assists: 58, plusMinus: 21, trend: 'up' },
  { id: 'makar', name: 'Cale Makar', position: 'D', team: 'COL', points: 65, goals: 17, assists: 48, plusMinus: 19, trend: 'steady' },
  { id: 'shesterkin', name: 'Igor Shesterkin', position: 'G', team: 'NYR', points: 54, goals: 0, assists: 2, plusMinus: 0, trend: 'down' },
  { id: 'bedard', name: 'Connor Bedard', position: 'C', team: 'CHI', points: 61, goals: 25, assists: 36, plusMinus: -3, trend: 'up' },
  { id: 'kaprizov', name: 'Kirill Kaprizov', position: 'LW', team: 'MIN', points: 73, goals: 34, assists: 39, plusMinus: 8, trend: 'steady' }
];

export const standings = [
  { rank: 1, team: 'Ice Breakers', manager: 'You', record: '8-2-1', points: 17 },
  { rank: 2, team: 'Puck Dynasty', manager: 'Alex R.', record: '7-3-1', points: 15 },
  { rank: 3, team: 'Hat Trick Heroes', manager: 'Sam T.', record: '6-4-1', points: 13 },
  { rank: 4, team: 'The Zambonis', manager: 'Jordan K.', record: '4-6-1', points: 9 },
  { rank: 5, team: 'Five Hole Club', manager: 'Morgan L.', record: '3-7-1', points: 7 }
];

export const news = [
  { id: '1', tag: 'LINEUP', title: 'McDavid stays hot with four-point night', time: '2h ago', color: '#55d88a' },
  { id: '2', tag: 'INJURY', title: 'Shesterkin listed as day-to-day', time: '5h ago', color: '#ffb454' },
  { id: '3', tag: 'TREND', title: 'Bedard seeing more power-play minutes', time: 'Yesterday', color: '#7c8cff' }
];
