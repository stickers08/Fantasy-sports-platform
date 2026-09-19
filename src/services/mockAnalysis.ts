import { Player } from '../data/demoData';

export const playerAnalysis = (player: Player) => ({
  headline: player.trend === 'up' ? 'Strong momentum' : player.trend === 'down' ? 'Watch the matchup' : 'Reliable contributor',
  body: `Demo AI read: ${player.name} is producing ${player.points} fantasy points with ${player.goals} goals and ${player.assists} assists. ${player.trend === 'up' ? 'Recent usage and results point to a positive short-term trend.' : player.trend === 'down' ? 'A cautious start is reasonable until the next favorable matchup.' : 'The floor looks stable, making this player a dependable weekly option.'}`,
  bullets: [`${player.team} deployment is supporting their current role`, `${player.position} production is tracking with a solid fantasy floor`, `Suggested move: ${player.trend === 'up' ? 'keep in active lineup' : 'monitor before making a move'}`]
});

export const tradeAnalysis = (give: Player, receive: Player) => {
  const delta = receive.points - give.points;
  return {
    verdict: delta >= 0 ? 'Favorable value' : 'A calculated gamble',
    body: `Demo AI read: Sending ${give.name} for ${receive.name} changes your weekly projection by approximately ${delta >= 0 ? '+' : ''}${delta} points. ${delta >= 0 ? 'The incoming player brings the stronger current production profile.' : 'You are trading current points for a different roster fit and upside profile.'}`,
    note: `Roster fit: ${receive.position} · ${receive.team} | Production edge: ${delta >= 0 ? 'incoming' : 'outgoing'}`
  };
};
