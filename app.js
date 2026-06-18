const MATCHES_ENDPOINT = '/api/matches';

const STAGE_LABELS = {
  GROUP_STAGE: 'Fase de Grupos',
  LAST_32: '16 Avos de Final',
  LAST_16: 'Oitavas de Final',
  QUARTER_FINALS: 'Quartas de Final',
  SEMI_FINALS: 'Semifinais',
  THIRD_PLACE: '3º Lugar',
  FINAL: 'Final'
};

const STATUS_LABELS = {
  SCHEDULED: 'Agendado',
  TIMED: 'Agendado',
  IN_PLAY: 'Em andamento',
  PAUSED: 'Em andamento',
  FINISHED: 'Encerrado',
  POSTPONED: 'Postergado',
  SUSPENDED: 'Suspenso',
  CANCELLED: 'Cancelado'
};

const PARTICIPANTS = [
  { name: 'Weverthon', fullName: 'Weverthon Dias',    color: '#1d4ed8' },
  { name: 'Marcos',    fullName: 'Marcos Vinícius',   color: '#15803d' },
  { name: 'Welsirley', fullName: 'Welsirley Brito',   color: '#a16207' },
  { name: 'Basilio',   fullName: 'Lucas Basílio',     color: '#be185d' },
  { name: 'Douglas',   fullName: 'Douglas Chagas',    color: '#6d28d9' },
  { name: 'Euller',    fullName: 'Euller Ramos',      color: '#b91c1c' },
  { name: 'Reiner',    fullName: 'Reiner Marques',    color: '#0e7490' },
  { name: 'Pedroka',   fullName: 'Pedroka Ramos',     color: '#ea580c' }
];

const BOLAO_SEED = [
  { home: 'México', away: 'África do Sul', palpites: { Weverthon: '3x1', Marcos: '2x0', Welsirley: '2x1', Basilio: '2x0', Douglas: '2x1', Euller: '0x0', Reiner: '2x1' } },
  { home: 'Coréia do Sul', away: 'Rep. Tcheca', palpites: { Weverthon: '2x2', Marcos: '2x2', Welsirley: '2x2', Basilio: '2x0', Douglas: '2x1', Euller: '2x1', Reiner: '2x1' } },
  { home: 'Canadá', away: 'Bósnia', palpites: { Weverthon: '2x1', Marcos: '1x1', Welsirley: '1x2', Basilio: '2x1', Douglas: '1x2', Euller: '1x0', Reiner: '0x2' } },
  { home: 'Catar', away: 'Suíça', palpites: { Weverthon: '1x2', Marcos: '1x2', Welsirley: '0x2', Basilio: '0x2', Douglas: '0x2', Euller: '0x2', Reiner: '0x2' } },
  { home: 'Brasil', away: 'Marrocos', palpites: { Weverthon: '3x1', Marcos: '2x0', Welsirley: '2x0', Basilio: '2x1', Douglas: '2x1', Euller: '2x0', Reiner: '2x1' } },
  { home: 'Haiti', away: 'Escócia', palpites: { Weverthon: '1x3', Marcos: '1x3', Welsirley: '0x3', Basilio: '0x2', Douglas: '0x3', Euller: '1x2', Reiner: '0x2' } },
  { home: 'EUA', away: 'Paraguai', palpites: { Weverthon: '2x2', Marcos: '2x2', Welsirley: '1x0', Basilio: '3x1', Douglas: '2x1', Euller: '0x3', Reiner: '1x1' } },
  { home: 'Austrália', away: 'Turquia', palpites: { Weverthon: '2x2', Marcos: '1x2', Welsirley: '2x3', Basilio: '1x2', Douglas: '1x2', Euller: '2x2', Reiner: '0x2' } },
  { home: 'Alemanha', away: 'Curaçao', palpites: { Weverthon: '3x0', Marcos: '4x0', Welsirley: '6x0', Basilio: '4x0', Douglas: '7x0', Euller: '4x0', Reiner: '3x0' } },
  { home: 'Costa do Marfim', away: 'Equador', palpites: { Weverthon: '2x2', Marcos: '1x1', Welsirley: '1x2', Basilio: '1x1', Douglas: '1x2', Euller: '1x1', Reiner: '1x0' } },
  { home: 'Holanda', away: 'Japão', palpites: { Weverthon: '3x1', Marcos: '1x1', Welsirley: '2x1', Basilio: '1x1', Douglas: '2x1', Euller: '3x1', Reiner: '2x0' } },
  { home: 'Suécia', away: 'Tunísia', palpites: { Weverthon: '2x1', Marcos: '2x0', Welsirley: '1x1', Basilio: '1x1', Douglas: '2x1', Euller: '3x1', Reiner: '2x0' } },
  { home: 'Bélgica', away: 'Egito', palpites: { Weverthon: '2x1', Marcos: '2x1', Welsirley: '3x1', Basilio: '3x1', Douglas: '2x0', Euller: '3x1', Reiner: '2x1' } },
  { home: 'Irã', away: 'Nova Zelândia', palpites: { Weverthon: '1x1', Marcos: '3x1', Welsirley: '4x0', Basilio: '1x1', Douglas: '0x1', Euller: '2x2', Reiner: '0x0' } },
  { home: 'Espanha', away: 'Cabo Verde', palpites: { Weverthon: '3x0', Marcos: '3x0', Welsirley: '5x0', Basilio: '5x0', Douglas: '6x0', Euller: '4x0', Reiner: '5x0' } },
  { home: 'Arábia Saudita', away: 'Uruguai', palpites: { Weverthon: '1x3', Marcos: '1x2', Welsirley: '1x3', Basilio: '1x2', Douglas: '1x2', Euller: '2x2', Reiner: '0x2' } },
  { home: 'França', away: 'Senegal', palpites: { Weverthon: '3x1', Marcos: '2x1', Welsirley: '3x0', Basilio: '3x1', Douglas: '3x1', Euller: '3x1', Reiner: '3x0' } },
  { home: 'Iraque', away: 'Noruega', palpites: { Weverthon: '1x2', Marcos: '0x2', Welsirley: '0x2', Basilio: '0x2', Douglas: '0x3', Euller: '1x3', Reiner: '0x2' } },
  { home: 'Argentina', away: 'Argélia', palpites: { Weverthon: '3x0', Marcos: '1x0', Welsirley: '2x0', Basilio: '3x0', Douglas: '3x0', Euller: '5x2', Reiner: '3x0' } },
  { home: 'Áustria', away: 'Jordânia', palpites: { Weverthon: '3x2', Marcos: '3x0', Welsirley: '2x1', Basilio: '2x0', Douglas: '2x0', Euller: '1x1', Reiner: '1x0' } },
  { home: 'Portugal', away: 'RD Congo', palpites: { Weverthon: '3x1', Marcos: '2x0', Welsirley: '3x1', Basilio: '3x0', Douglas: '3x0', Euller: '5x2', Reiner: '3x0' } },
  { home: 'Uzbequistão', away: 'Colômbia', palpites: { Weverthon: '1x2', Marcos: '0x2', Welsirley: '1x2', Basilio: '0x2', Douglas: '0x2', Euller: '0x2', Reiner: '0x2' } },
  { home: 'Inglaterra', away: 'Croácia', palpites: { Weverthon: '2x2', Marcos: '2x1', Welsirley: '3x3', Basilio: '2x1', Douglas: '2x1', Euller: '2x1', Reiner: '3x2' } },
  { home: 'Gana', away: 'Panamá', palpites: { Weverthon: '2x1', Marcos: '3x1', Welsirley: '4x1', Basilio: '2x0', Douglas: '3x0', Euller: '0x1', Reiner: '2x0' } }
];

const BOLAO_SEED_R2 = [
  { home: 'Rep. Tcheca', away: 'África do Sul', palpites: { Douglas: '2x1', Euller: '1x0', Reiner: '1x1', Pedroka: '2x0' } },
  { home: 'México', away: 'Coréia do Sul', palpites: { Douglas: '2x2', Euller: '1x2', Reiner: '2x1', Pedroka: '1x1' } },
  { home: 'Suíça', away: 'Bósnia', palpites: { Douglas: '2x0', Euller: '0x0', Reiner: '2x1', Pedroka: '1x2' } },
  { home: 'Canadá', away: 'Catar', palpites: { Douglas: '2x0', Euller: '2x0', Reiner: '2x0', Pedroka: '2x0' } },
  { home: 'Brasil', away: 'Haiti', palpites: { Douglas: '3x0', Euller: '2x0', Reiner: '3x1', Pedroka: '4x0' } },
  { home: 'Escócia', away: 'Marrocos', palpites: { Douglas: '0x2', Euller: '1x3', Reiner: '1x2', Pedroka: '0x2' } },
  { home: 'EUA', away: 'Austrália', palpites: { Douglas: '1x2', Euller: '2x1', Reiner: '2x2', Pedroka: '1x1' } },
  { home: 'Turquia', away: 'Paraguai', palpites: { Douglas: '2x1', Euller: '1x1', Reiner: '2x1', Pedroka: '2x0' } },
  { home: 'Alemanha', away: 'Costa do Marfim', palpites: { Douglas: '3x1', Euller: '4x0', Reiner: '3x1', Pedroka: '6x1' } },
  { home: 'Equador', away: 'Curaçao', palpites: { Douglas: '3x0', Euller: '3x0', Reiner: '3x0', Pedroka: '2x1' } },
  { home: 'Holanda', away: 'Suécia', palpites: { Douglas: '3x1', Euller: '3x2', Reiner: '3x2', Pedroka: '3x2' } },
  { home: 'Tunísia', away: 'Japão', palpites: { Douglas: '0x2', Euller: '0x2', Reiner: '0x2', Pedroka: '1x3' } },
  { home: 'Bélgica', away: 'Irã', palpites: { Douglas: '2x0', Euller: '2x1', Reiner: '2x0', Pedroka: '3x0' } },
  { home: 'Nova Zelândia', away: 'Egito', palpites: { Douglas: '1x1', Euller: '0x1', Reiner: '0x1', Pedroka: '2x2' } },
  { home: 'Espanha', away: 'Arábia Saudita', palpites: { Douglas: '3x1', Euller: '3x0', Reiner: '3x0', Pedroka: '3x0' } },
  { home: 'Uruguai', away: 'Cabo Verde', palpites: { Douglas: '3x0', Euller: '2x0', Reiner: '2x0', Pedroka: '1x1' } },
  { home: 'França', away: 'Iraque', palpites: { Douglas: '6x0', Euller: '5x1', Reiner: '4x0', Pedroka: '6x0' } },
  { home: 'Noruega', away: 'Senegal', palpites: { Douglas: '1x2', Euller: '2x0', Reiner: '2x2', Pedroka: '2x2' } },
  { home: 'Argentina', away: 'Áustria', palpites: { Douglas: '2x1', Euller: '3x1', Reiner: '2x1', Pedroka: '4x0' } },
  { home: 'Jordânia', away: 'Argélia', palpites: { Douglas: '1x2', Euller: '0x0', Reiner: '1x2', Pedroka: '0x2' } },
  { home: 'Portugal', away: 'Uzbequistão', palpites: { Douglas: '4x0', Euller: '2x0', Reiner: '3x0', Pedroka: '4x0' } },
  { home: 'Colômbia', away: 'RD Congo', palpites: { Douglas: '3x0', Euller: '2x0', Reiner: '2x0', Pedroka: '3x0' } },
  { home: 'Inglaterra', away: 'Gana', palpites: { Douglas: '2x1', Euller: '3x0', Reiner: '3x1', Pedroka: '3x0' } },
  { home: 'Panamá', away: 'Croácia', palpites: { Douglas: '0x2', Euller: '0x2', Reiner: '0x2', Pedroka: '0x4' } },
];

const BOLAO_SEED_R2_BY_ID = [
  { id: 537329, palpites: { Weverthon:'1x2', Marcos:'2x2', Welsirley:'2x1', Basilio:'2x0', Douglas:'2x1', Euller:'1x0', Reiner:'1x1', Pedroka:'2x0' } },
  { id: 537330, palpites: { Weverthon:'2x2', Marcos:'1x1', Welsirley:'1x1', Basilio:'1x1', Douglas:'2x2', Euller:'1x2', Reiner:'2x1', Pedroka:'1x1' } },
  { id: 537335, palpites: { Weverthon:'2x0', Marcos:'2x1', Welsirley:'2x1', Basilio:'2x1', Douglas:'2x0', Euller:'0x0', Reiner:'2x1', Pedroka:'1x2' } },
  { id: 537336, palpites: { Weverthon:'2x1', Marcos:'3x1', Welsirley:'1x0', Basilio:'2x0', Douglas:'2x0', Euller:'2x0', Reiner:'2x0', Pedroka:'2x0' } },
  { id: 537342, palpites: { Weverthon:'1x3', Marcos:'1x2', Welsirley:'1x1', Basilio:'1x2', Douglas:'0x2', Euller:'1x3', Reiner:'1x2', Pedroka:'0x2' } },
  { id: 537341, palpites: { Weverthon:'4x1', Marcos:'5x0', Welsirley:'3x0', Basilio:'4x0', Douglas:'3x0', Euller:'2x0', Reiner:'3x1', Pedroka:'4x0' } },
  { id: 537348, palpites: { Weverthon:'2x0', Marcos:'3x2', Welsirley:'2x2', Basilio:'2x1', Douglas:'1x2', Euller:'2x1', Reiner:'2x2', Pedroka:'1x1' } },
  { id: 537347, palpites: { Weverthon:'1x2', Marcos:'2x2', Welsirley:'2x1', Basilio:'2x1', Douglas:'2x1', Euller:'1x1', Reiner:'2x1', Pedroka:'2x0' } },
  { id: 537353, palpites: { Weverthon:'3x0', Marcos:'3x1', Welsirley:'2x0', Basilio:'3x0', Douglas:'3x1', Euller:'4x0', Reiner:'3x1', Pedroka:'6x1' } },
  { id: 537354, palpites: { Weverthon:'3x1', Marcos:'4x1', Welsirley:'2x0', Basilio:'3x0', Douglas:'3x0', Euller:'3x0', Reiner:'3x0', Pedroka:'2x1' } },
  { id: 537359, palpites: { Weverthon:'2x1', Marcos:'1x1', Welsirley:'2x2', Basilio:'2x1', Douglas:'3x1', Euller:'3x2', Reiner:'3x2', Pedroka:'3x2' } },
  { id: 537360, palpites: { Weverthon:'1x2', Marcos:'2x3', Welsirley:'1x2', Basilio:'0x2', Douglas:'0x2', Euller:'0x2', Reiner:'0x2', Pedroka:'1x3' } },
  { id: 537365, palpites: { Weverthon:'2x0', Marcos:'4x1', Welsirley:'1x0', Basilio:'2x0', Douglas:'2x0', Euller:'2x1', Reiner:'2x0', Pedroka:'3x0' } },
  { id: 537366, palpites: { Weverthon:'2x2', Marcos:'1x2', Welsirley:'1x2', Basilio:'1x2', Douglas:'1x1', Euller:'0x1', Reiner:'0x1', Pedroka:'2x2' } },
  { id: 537371, palpites: { Weverthon:'3x0', Marcos:'2x0', Welsirley:'3x1', Basilio:'3x0', Douglas:'3x1', Euller:'3x0', Reiner:'3x0', Pedroka:'3x0' } },
  { id: 537372, palpites: { Weverthon:'2x0', Marcos:'3x1', Welsirley:'2x1', Basilio:'2x1', Douglas:'3x0', Euller:'2x0', Reiner:'2x0', Pedroka:'1x1' } },
  { id: 537393, palpites: { Weverthon:'4x0', Marcos:'5x0', Welsirley:'4x0', Basilio:'4x0', Douglas:'6x0', Euller:'5x1', Reiner:'4x0', Pedroka:'6x0' } },
  { id: 537394, palpites: { Weverthon:'2x1', Marcos:'2x2', Welsirley:'1x1', Basilio:'2x1', Douglas:'1x2', Euller:'2x0', Reiner:'2x2', Pedroka:'2x2' } },
  { id: 537399, palpites: { Weverthon:'4x0', Marcos:'2x1', Welsirley:'1x1', Basilio:'2x1', Douglas:'2x1', Euller:'3x1', Reiner:'2x1', Pedroka:'4x0' } },
  { id: 537400, palpites: { Weverthon:'1x3', Marcos:'1x1', Welsirley:'1x2', Basilio:'1x2', Douglas:'1x2', Euller:'0x0', Reiner:'1x2', Pedroka:'0x2' } },
  { id: 537405, palpites: { Weverthon:'3x0', Marcos:'3x0', Welsirley:'2x0', Basilio:'2x0', Douglas:'4x0', Euller:'2x0', Reiner:'3x0', Pedroka:'4x0' } },
  { id: 537406, palpites: { Weverthon:'2x0', Marcos:'2x1', Welsirley:'2x1', Basilio:'2x1', Douglas:'3x0', Euller:'2x0', Reiner:'2x0', Pedroka:'3x0' } },
  { id: 537411, palpites: { Weverthon:'3x1', Marcos:'2x1', Welsirley:'3x1', Basilio:'3x0', Douglas:'2x1', Euller:'3x0', Reiner:'3x1', Pedroka:'3x0' } },
  { id: 537412, palpites: { Weverthon:'1x3', Marcos:'1x3', Welsirley:'0x3', Basilio:'0x3', Douglas:'0x2', Euller:'0x2', Reiner:'0x2', Pedroka:'0x4' } },
];

const TEAM_ALIASES = {
  'México': { primary: 'Mexico' },
  'África do Sul': { primary: 'South Africa' },
  'Coréia do Sul': { primary: 'Korea Republic', alts: ['South Korea'] },
  'Rep. Tcheca': { primary: 'Czech Republic', alts: ['Czechia'] },
  'Canadá': { primary: 'Canada' },
  'Bósnia': { primary: 'Bosnia and Herzegovina' },
  'Catar': { primary: 'Qatar' },
  'Suíça': { primary: 'Switzerland' },
  'Brasil': { primary: 'Brazil' },
  'Marrocos': { primary: 'Morocco' },
  'Haiti': { primary: 'Haiti' },
  'Escócia': { primary: 'Scotland' },
  'EUA': { primary: 'United States', alts: ['USA'] },
  'Paraguai': { primary: 'Paraguay' },
  'Austrália': { primary: 'Australia' },
  'Turquia': { primary: 'Turkey', alts: ['Turkiye'] },
  'Alemanha': { primary: 'Germany' },
  'Curaçao': { primary: 'Curacao' },
  'Costa do Marfim': { primary: 'Ivory Coast', alts: ['Cote dIvoire'] },
  'Equador': { primary: 'Ecuador' },
  'Holanda': { primary: 'Netherlands' },
  'Japão': { primary: 'Japan' },
  'Suécia': { primary: 'Sweden' },
  'Tunísia': { primary: 'Tunisia' },
  'Bélgica': { primary: 'Belgium' },
  'Egito': { primary: 'Egypt' },
  'Irã': { primary: 'Iran', alts: ['IR Iran'] },
  'Nova Zelândia': { primary: 'New Zealand' },
  'Espanha': { primary: 'Spain' },
  'Cabo Verde': { primary: 'Cape Verde' },
  'Arábia Saudita': { primary: 'Saudi Arabia' },
  'Uruguai': { primary: 'Uruguay' },
  'França': { primary: 'France' },
  'Senegal': { primary: 'Senegal' },
  'Iraque': { primary: 'Iraq' },
  'Noruega': { primary: 'Norway' },
  'Argentina': { primary: 'Argentina' },
  'Argélia': { primary: 'Algeria' },
  'Áustria': { primary: 'Austria' },
  'Jordânia': { primary: 'Jordan' },
  'Portugal': { primary: 'Portugal' },
  'RD Congo': { primary: 'DR Congo', alts: ['Congo DR', 'Democratic Republic of the Congo'] },
  'Uzbequistão': { primary: 'Uzbekistan' },
  'Colômbia': { primary: 'Colombia' },
  'Inglaterra': { primary: 'England' },
  'Croácia': { primary: 'Croatia' },
  'Gana': { primary: 'Ghana' },
  'Panamá': { primary: 'Panama' }
};

const els = {
  btnSettings: document.getElementById('btnSettings'),
  settingsPanel: document.getElementById('settingsPanel'),
  apiKey: document.getElementById('apiKey'),
  btnSaveKey: document.getElementById('btnSaveKey'),
  autoRefresh: document.getElementById('autoRefresh'),
  btnRefresh: document.getElementById('btnRefresh'),
  btnClearScores: document.getElementById('btnClearScores'),
  btnExport: document.getElementById('btnExport'),
  lastUpdated: document.getElementById('lastUpdated'),
  statusBar: document.getElementById('statusBar'),
  tabs: document.getElementById('tabs'),
  content: document.getElementById('content'),
  emptyState: document.getElementById('emptyState'),
  viewerBanner: document.getElementById('viewerBanner')
};

const READ_ONLY = !['localhost', '127.0.0.1', ''].includes(location.hostname);

let allMatches = [];
let activeStage = 'GROUP_STAGE';
let activeBolaoTab = 'GERAL';
let activeBolaoParticipant = null;
let autoRefreshTimer = null;
let remoteData = { scores: {}, bolao: {} };

function getApiKey() {
  return localStorage.getItem('copa2026_api_key') || '';
}

function setApiKey(key) {
  localStorage.setItem('copa2026_api_key', key);
}

function getScoreOverrides() {
  if (READ_ONLY) return remoteData.scores || {};
  try {
    return JSON.parse(localStorage.getItem('copa2026_scores') || '{}');
  } catch (e) {
    return {};
  }
}

function saveScoreOverride(matchId, side, value) {
  const overrides = getScoreOverrides();
  const entry = overrides[matchId] || {};
  if (value === '' || value === null || value === undefined) {
    delete entry[side];
  } else {
    entry[side] = Number(value);
  }
  if (Object.keys(entry).length === 0) {
    delete overrides[matchId];
  } else {
    overrides[matchId] = entry;
  }
  localStorage.setItem('copa2026_scores', JSON.stringify(overrides));
}

function getEffectiveScore(match) {
  const overrides = getScoreOverrides();
  const override = overrides[match.id] || {};
  const apiFt = (match.score && match.score.fullTime) || {};

  const home = override.home !== undefined ? override.home
    : (apiFt.home !== null && apiFt.home !== undefined ? apiFt.home : null);
  const away = override.away !== undefined ? override.away
    : (apiFt.away !== null && apiFt.away !== undefined ? apiFt.away : null);

  return { home, away };
}

function normalizeTeamName(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function teamsMatch(ptName, apiName) {
  if (!apiName) return false;
  const normApi = normalizeTeamName(apiName);
  const alias = TEAM_ALIASES[ptName];
  const candidates = [normalizeTeamName(ptName)];
  if (alias) {
    if (alias.primary) candidates.push(normalizeTeamName(alias.primary));
    (alias.alts || []).forEach(a => candidates.push(normalizeTeamName(a)));
  }
  return candidates.some(c => c && (normApi === c || normApi.includes(c) || c.includes(normApi)));
}

function findApiMatchForSeed(seed) {
  const groupMatches = allMatches.filter(m => m.stage === 'GROUP_STAGE');
  for (const m of groupMatches) {
    if (!m.homeTeam || !m.awayTeam) continue;
    if (teamsMatch(seed.home, m.homeTeam.name) && teamsMatch(seed.away, m.awayTeam.name)) {
      return { match: m, swapped: false };
    }
    if (teamsMatch(seed.home, m.awayTeam.name) && teamsMatch(seed.away, m.homeTeam.name)) {
      return { match: m, swapped: true };
    }
  }
  return null;
}

function getBolaoData() {
  if (READ_ONLY) return remoteData.bolao || {};
  try {
    return JSON.parse(localStorage.getItem('copa2026_bolao') || '{}');
  } catch (e) {
    return {};
  }
}

function saveBolaoEntry(matchId, participant, side, value) {
  const data = getBolaoData();
  const entry = data[matchId] || {};
  const palpite = entry[participant] || {};
  if (value === '' || value === null || value === undefined) {
    delete palpite[side];
  } else {
    palpite[side] = Number(value);
  }
  if (Object.keys(palpite).length === 0) {
    delete entry[participant];
  } else {
    entry[participant] = palpite;
  }
  if (Object.keys(entry).length === 0) {
    delete data[matchId];
  } else {
    data[matchId] = entry;
  }
  localStorage.setItem('copa2026_bolao', JSON.stringify(data));
}

function seedBolaoData() {
  const data = getBolaoData();
  let changed = false;

  BOLAO_SEED.forEach(seed => {
    const found = findApiMatchForSeed(seed);
    if (!found) return;

    const entry = data[found.match.id] || {};
    let entryChanged = false;

    PARTICIPANTS.forEach(p => {
      if (entry[p.name]) return;
      const guess = seed.palpites[p.name];
      if (!guess) return;
      const [a, b] = guess.split('x').map(Number);
      entry[p.name] = found.swapped ? { home: b, away: a } : { home: a, away: b };
      entryChanged = true;
    });

    if (entryChanged) {
      data[found.match.id] = entry;
      changed = true;
    }
  });

  BOLAO_SEED_R2_BY_ID.forEach(({ id, palpites }) => {
    const key = String(id);
    const entry = data[key] || {};
    let entryChanged = false;

    PARTICIPANTS.forEach(p => {
      if (entry[p.name]) return;
      const guess = palpites[p.name];
      if (!guess) return;
      const [a, b] = guess.split('x').map(Number);
      entry[p.name] = { home: a, away: b };
      entryChanged = true;
    });

    if (entryChanged) {
      data[key] = entry;
      changed = true;
    }
  });

  if (changed) localStorage.setItem('copa2026_bolao', JSON.stringify(data));
}

function scorePalpite(actual, palpite) {
  if (actual.home === null || actual.away === null) return null;
  if (palpite.home === undefined || palpite.away === undefined) return 0;

  if (actual.home === palpite.home && actual.away === palpite.away) return 3;

  const actualResult = actual.home === actual.away ? 'draw' : (actual.home > actual.away ? 'home' : 'away');
  const palpiteResult = palpite.home === palpite.away ? 'draw' : (palpite.home > palpite.away ? 'home' : 'away');
  return actualResult === palpiteResult ? 1 : 0;
}

function showStatus(message, type) {
  els.statusBar.textContent = message;
  els.statusBar.className = 'status-bar' + (type ? ' ' + type : '');
  els.statusBar.classList.toggle('hidden', !message);
}

function setLastUpdated(date) {
  els.lastUpdated.textContent = date
    ? `Atualizado em ${date.toLocaleString('pt-BR')}`
    : '';
}

async function fetchMatches() {
  const key = getApiKey();
  if (!key) {
    showStatus('Configure sua chave da API em "⚙ API" para buscar os placares.', 'error');
    els.settingsPanel.classList.remove('hidden');
    return;
  }

  showStatus('Buscando placares...', 'info');
  els.btnRefresh.disabled = true;

  try {
    const res = await fetch(MATCHES_ENDPOINT, {
      headers: { 'X-Auth-Token': key }
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Erro ${res.status}: ${text.slice(0, 200)}`);
    }

    const data = await res.json();
    allMatches = data.matches || [];

    localStorage.setItem('copa2026_matches', JSON.stringify(allMatches));
    const now = new Date();
    localStorage.setItem('copa2026_updated', now.toISOString());
    setLastUpdated(now);

    seedBolaoData();
    showStatus('', null);
    render();
  } catch (err) {
    console.error(err);
    let msg = `Falha ao buscar placares: ${err.message}`;
    if (err.message.includes('Failed to fetch')) {
      msg += ' — verifique se o servidor local (server.py) está em execução.';
    }
    showStatus(msg, 'error');
  } finally {
    els.btnRefresh.disabled = false;
  }
}

function loadCache() {
  const cached = localStorage.getItem('copa2026_matches');
  const updated = localStorage.getItem('copa2026_updated');
  if (cached) {
    try {
      allMatches = JSON.parse(cached);
      if (updated) setLastUpdated(new Date(updated));
      seedBolaoData();
      render();
    } catch (e) {
      allMatches = [];
    }
  }
}

function formatDateTime(utcDate) {
  const d = new Date(utcDate);
  return d.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function statusBadge(status) {
  const label = STATUS_LABELS[status] || status;
  let cls = 'scheduled';
  if (status === 'IN_PLAY' || status === 'PAUSED') cls = 'live';
  if (status === 'FINISHED') cls = 'finished';
  return `<span class="status-badge ${cls}">${label}</span>`;
}

function scoreDisplay(match) {
  const { home, away } = getEffectiveScore(match);
  const ro = READ_ONLY ? 'disabled' : '';
  return `
    <div class="score-inputs">
      <input type="number" min="0" class="score-input" data-match-id="${match.id}" data-side="home" value="${home !== null ? home : ''}" placeholder="-" ${ro}>
      <span class="dash">x</span>
      <input type="number" min="0" class="score-input" data-match-id="${match.id}" data-side="away" value="${away !== null ? away : ''}" placeholder="-" ${ro}>
    </div>
  `;
}

function teamCell(team, side) {
  const safeTeam = team || {};
  const crest = safeTeam.crest
    ? `<img src="${safeTeam.crest}" alt="" onerror="this.remove()">`
    : '';
  const name = safeTeam.name || safeTeam.shortName || 'A definir';
  if (side === 'home') {
    return `<div class="team home"><span>${name}</span>${crest}</div>`;
  }
  return `<div class="team away">${crest}<span>${name}</span></div>`;
}

function computeStandings(matches) {
  const table = {};

  function ensure(team) {
    if (!table[team.name]) {
      table[team.name] = {
        name: team.name,
        crest: team.crest,
        pj: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0
      };
    }
    return table[team.name];
  }

  matches.forEach(m => {
    if (!m.homeTeam || !m.homeTeam.name || !m.awayTeam || !m.awayTeam.name) return;
    const { home: hg, away: ag } = getEffectiveScore(m);
    if (hg === null || ag === null) return;
    const home = ensure(m.homeTeam);
    const away = ensure(m.awayTeam);

    home.pj++; away.pj++;
    home.gp += hg; home.gc += ag;
    away.gp += ag; away.gc += hg;

    if (hg > ag) {
      home.v++; home.pts += 3;
      away.d++;
    } else if (hg < ag) {
      away.v++; away.pts += 3;
      home.d++;
    } else {
      home.e++; away.e++;
      home.pts += 1; away.pts += 1;
    }
  });

  Object.values(table).forEach(t => { t.sg = t.gp - t.gc; });

  return Object.values(table).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.sg !== a.sg) return b.sg - a.sg;
    return b.gp - a.gp;
  });
}

function renderStandingsTable(standings) {
  if (!standings.length) return '';
  const rows = standings.map(t => `
    <tr>
      <td>${t.crest ? `<img src="${t.crest}" alt="" width="18" height="18" onerror="this.remove()"> ` : ''}${t.name}</td>
      <td>${t.pts}</td>
      <td>${t.pj}</td>
      <td>${t.v}</td>
      <td>${t.e}</td>
      <td>${t.d}</td>
      <td>${t.gp}</td>
      <td>${t.gc}</td>
      <td>${t.sg}</td>
    </tr>
  `).join('');

  return `
    <table class="standings">
      <thead>
        <tr>
          <th>Time</th><th>Pts</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th><th>SG</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderMatchesTable(matches) {
  const rows = matches.map(m => `
    <tr class="match-row">
      <td class="match-meta">${formatDateTime(m.utcDate)}<br>${statusBadge(m.status)}</td>
      <td>${teamCell(m.homeTeam, 'home')}</td>
      <td class="score">${scoreDisplay(m)}</td>
      <td>${teamCell(m.awayTeam, 'away')}</td>
    </tr>
  `).join('');

  return `
    <table>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderGroupStage() {
  const groupMatches = allMatches.filter(m => m.stage === 'GROUP_STAGE');
  if (!groupMatches.length) return '<p class="match-meta">Sem dados da fase de grupos.</p>';

  const groups = {};
  groupMatches.forEach(m => {
    const g = m.group || 'Grupo';
    if (!groups[g]) groups[g] = [];
    groups[g].push(m);
  });

  return Object.keys(groups).sort().map(groupName => {
    const matches = groups[groupName].sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
    const standings = computeStandings(matches);
    return `
      <div class="group-block" data-group="${groupName}">
        <h3>${groupName.replace('GROUP_', 'Grupo ')}</h3>
        <div class="standings-wrap">${renderStandingsTable(standings)}</div>
        ${renderMatchesTable(matches)}
      </div>
    `;
  }).join('');
}

function renderKnockoutStage(stage) {
  const matches = allMatches
    .filter(m => m.stage === stage)
    .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

  if (!matches.length) return `<p class="match-meta">Sem jogos definidos ainda para ${STAGE_LABELS[stage]}.</p>`;

  const items = matches.map(m => `
    <div class="knockout-match">
      <div class="match-meta">${formatDateTime(m.utcDate)} &middot; ${statusBadge(m.status)}</div>
      ${teamCell(m.homeTeam, 'home')}
      <div class="score">${scoreDisplay(m)}</div>
      ${teamCell(m.awayTeam, 'away')}
    </div>
  `).join('');

  return `<div class="knockout-list">${items}</div>`;
}

function render() {
  if (!allMatches.length) {
    els.emptyState.classList.remove('hidden');
    els.content.innerHTML = '';
    return;
  }
  els.emptyState.classList.add('hidden');

  if (activeStage === 'GROUP_STAGE') {
    els.content.innerHTML = renderGroupStage();
  } else if (activeStage === 'NEXT_PHASE') {
    els.content.innerHTML = renderNextPhase();
  } else if (activeStage === 'BOLAO') {
    els.content.innerHTML = renderBolao();
  } else {
    els.content.innerHTML = renderKnockoutStage(activeStage);
  }
}

function formatStageLabel(stage) {
  return stage.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function getFirstKnockoutStage() {
  const knockoutMatches = allMatches.filter(m => m.stage !== 'GROUP_STAGE');
  if (!knockoutMatches.length) return null;

  const counts = {};
  const earliestDate = {};
  knockoutMatches.forEach(m => {
    counts[m.stage] = (counts[m.stage] || 0) + 1;
    const date = new Date(m.utcDate).getTime();
    if (!earliestDate[m.stage] || date < earliestDate[m.stage]) {
      earliestDate[m.stage] = date;
    }
  });

  return Object.keys(counts).sort((a, b) => earliestDate[a] - earliestDate[b])[0];
}

function isNextPhaseDetermined() {
  const stage = getFirstKnockoutStage();
  if (!stage) return false;
  const matches = allMatches.filter(m => m.stage === stage);
  return matches.some(m => m.homeTeam && m.homeTeam.name && m.awayTeam && m.awayTeam.name);
}

function renderNextPhase() {
  const groupMatches = allMatches.filter(m => m.stage === 'GROUP_STAGE');
  if (!groupMatches.length) {
    return '<p class="match-meta">Busque os confrontos para ver a projeção da próxima fase.</p>';
  }

  if (isNextPhaseDetermined()) {
    const stage = getFirstKnockoutStage();
    return `
      <p class="match-meta">
        A fase de grupos terminou e os confrontos da próxima fase já estão definidos.
        Confira na aba "${STAGE_LABELS[stage] || formatStageLabel(stage)}".
      </p>
      ${renderKnockoutStage(stage)}
    `;
  }

  const groups = {};
  groupMatches.forEach(m => {
    const g = m.group || 'Grupo';
    if (!groups[g]) groups[g] = [];
    groups[g].push(m);
  });

  const groupNames = Object.keys(groups).sort();
  const standingsByGroup = {};
  groupNames.forEach(g => {
    standingsByGroup[g] = computeStandings(groups[g]);
  });

  const thirds = [];
  groupNames.forEach(g => {
    const st = standingsByGroup[g];
    if (st.length >= 3 && st[2].pj > 0) {
      thirds.push({ ...st[2], group: g });
    }
  });
  thirds.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.sg !== a.sg) return b.sg - a.sg;
    return b.gp - a.gp;
  });
  const qualifiedThirdGroups = new Set(thirds.slice(0, 8).map(t => t.group));

  const groupsHtml = groupNames.map(g => {
    const st = standingsByGroup[g];
    const rows = st.map((t, i) => {
      let badge;
      if (i < 2) {
        badge = '<span class="qual-badge qualified">Classificado</span>';
      } else if (i === 2) {
        badge = qualifiedThirdGroups.has(g)
          ? '<span class="qual-badge qualified">Classificado (3º)</span>'
          : '<span class="qual-badge pending">Em disputa (3º)</span>';
      } else {
        badge = '<span class="qual-badge eliminated">Eliminado</span>';
      }
      return `
        <tr>
          <td>${i + 1}º</td>
          <td>${t.crest ? `<img src="${t.crest}" alt="" width="18" height="18" onerror="this.remove()"> ` : ''}${t.name}</td>
          <td>${t.pts}</td>
          <td>${t.sg}</td>
          <td>${badge}</td>
        </tr>
      `;
    }).join('');

    return `
      <div class="group-block">
        <h3>${g.replace('GROUP_', 'Grupo ')}</h3>
        <table class="standings">
          <thead><tr><th>#</th><th>Time</th><th>Pts</th><th>SG</th><th>Situação</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="5" class="match-meta">Sem resultados ainda.</td></tr>'}</tbody>
        </table>
      </div>
    `;
  }).join('');

  const thirdsRows = thirds.map((t, i) => `
    <tr>
      <td>${i + 1}º</td>
      <td>${t.crest ? `<img src="${t.crest}" alt="" width="18" height="18" onerror="this.remove()"> ` : ''}${t.name}</td>
      <td>${t.group.replace('GROUP_', 'Grupo ')}</td>
      <td>${t.pts}</td>
      <td>${t.sg}</td>
      <td>${i < 8 ? '<span class="qual-badge qualified">Classificado</span>' : '<span class="qual-badge eliminated">Eliminado</span>'}</td>
    </tr>
  `).join('');

  return `
    <p class="match-meta">
      Projeção com base nos placares já registrados. Os 1ºs e 2ºs colocados de cada grupo avançam,
      além dos 8 melhores 3ºs colocados entre os 12 grupos. Quando a fase de grupos terminar e a
      API divulgar o chaveamento oficial, esta aba mostrará automaticamente os confrontos reais.
    </p>
    ${groupsHtml}
    <div class="group-block">
      <h3>Ranking dos 3ºs Colocados (8 melhores avançam)</h3>
      <table class="standings">
        <thead><tr><th>#</th><th>Time</th><th>Grupo</th><th>Pts</th><th>SG</th><th>Situação</th></tr></thead>
        <tbody>${thirdsRows || '<tr><td colspan="6" class="match-meta">Sem dados ainda.</td></tr>'}</tbody>
      </table>
    </div>
  `;
}

function renderBolaoRanking(stageFilter) {
  const data = getBolaoData();
  const totals = {};
  PARTICIPANTS.forEach(p => { totals[p.name] = { pts: 0, exatos: 0, acertos: 0, jogos: 0 }; });

  const matches = stageFilter
    ? allMatches.filter(m => m.stage === stageFilter)
    : allMatches;

  matches.forEach(m => {
    const actual = getEffectiveScore(m);
    if (actual.home === null || actual.away === null) return;
    const entry = data[m.id] || {};
    PARTICIPANTS.forEach(p => {
      const pts = scorePalpite(actual, entry[p.name] || {});
      if (pts === null) return;
      totals[p.name].jogos++;
      totals[p.name].pts += pts;
      if (pts === 3) totals[p.name].exatos++;
      if (pts > 0) totals[p.name].acertos++;
    });
  });

  const ranking = PARTICIPANTS
    .map(p => ({ ...p, ...totals[p.name] }))
    .sort((a, b) => b.pts - a.pts || b.exatos - a.exatos);

  const rows = ranking.map((p, i) => `
    <tr style="background:${p.color}18">
      <td>${i + 1}º</td>
      <td><span class="participant-tag" style="background:${p.color}">${p.fullName || p.name}</span></td>
      <td>${p.pts}</td>
      <td>${p.exatos}</td>
      <td>${p.acertos}</td>
      <td>${p.jogos}</td>
    </tr>
  `).join('');

  return `
    <table class="standings">
      <thead>
        <tr><th>#</th><th>Participante</th><th>Pontos</th><th>Placares exatos</th><th>Acertos</th><th>Jogos avaliados</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

const ROUND_LABELS = {
  1: 'Primeira Rodada',
  2: 'Segunda Rodada',
  3: 'Terceira Rodada',
};

function renderBolaoMatchesTable(matches) {
  if (!matches.length) return '<p class="match-meta">Sem jogos definidos para esta fase ainda.</p>';

  const data = getBolaoData();
  const totalCols = PARTICIPANTS.length + 1;
  const headerCols = PARTICIPANTS.map(p => `<th class="participant-col" style="background:${p.color}">${p.name}</th>`).join('');

  let lastRound = null;
  let lastStage = null;
  const rows = matches.map(m => {
    const actual = getEffectiveScore(m);
    const entry = data[m.id] || {};

    const cells = PARTICIPANTS.map(p => {
      const palpite = entry[p.name] || {};
      const pts = scorePalpite(actual, palpite);
      let ptsClass = 'pts-pending';
      if (pts === 3) ptsClass = 'pts-3';
      else if (pts === 1) ptsClass = 'pts-1';
      else if (pts === 0) ptsClass = 'pts-0';

      const ro = READ_ONLY ? 'disabled' : '';
      return `
        <td class="participant-cell ${ptsClass}">
          <div class="bolao-inputs">
            <input type="number" min="0" class="score-input bolao-input" data-match-id="${m.id}" data-participant="${p.name}" data-side="home" value="${palpite.home !== undefined ? palpite.home : ''}" placeholder="-" ${ro}>
            <span class="dash">x</span>
            <input type="number" min="0" class="score-input bolao-input" data-match-id="${m.id}" data-participant="${p.name}" data-side="away" value="${palpite.away !== undefined ? palpite.away : ''}" placeholder="-" ${ro}>
          </div>
        </td>
      `;
    }).join('');

    const stageLabel = m.stage === 'GROUP_STAGE'
      ? (m.group || '').replace('GROUP_', 'Grupo ')
      : (STAGE_LABELS[m.stage] || formatStageLabel(m.stage));

    let separator = '';
    if (m.stage === 'GROUP_STAGE') {
      const round = m.matchday || 0;
      if (round !== lastRound) {
        lastRound = round;
        const label = ROUND_LABELS[round] || `Rodada ${round}`;
        separator = `<tr class="bolao-round-header"><td colspan="${totalCols}">⚽ ${label}</td></tr>`;
      }
    } else if (m.stage !== lastStage) {
      lastStage = m.stage;
      const label = STAGE_LABELS[m.stage] || formatStageLabel(m.stage);
      separator = `<tr class="bolao-round-header"><td colspan="${totalCols}">🏆 ${label}</td></tr>`;
    }

    return `
      ${separator}
      <tr>
        <td class="confronto-cell">
          <div class="match-meta">${formatDateTime(m.utcDate)} &middot; ${stageLabel}</div>
          <div class="detail-confronto" style="margin-top:4px">
            <span class="detail-home">
              ${m.homeTeam?.crest ? `<img src="${m.homeTeam.crest}" width="14" height="14" style="vertical-align:middle;flex-shrink:0;object-fit:contain">` : ''}
              <span>${m.homeTeam?.shortName || m.homeTeam?.name || '?'}</span>
            </span>
            <span class="detail-score">${actual.home !== null ? actual.home : '-'} x ${actual.away !== null ? actual.away : '-'}</span>
            <span class="detail-away">
              <span>${m.awayTeam?.shortName || m.awayTeam?.name || '?'}</span>
              ${m.awayTeam?.crest ? `<img src="${m.awayTeam.crest}" width="14" height="14" style="vertical-align:middle;flex-shrink:0;object-fit:contain">` : ''}
            </span>
          </div>
        </td>
        ${cells}
      </tr>
    `;
  }).join('');

  return `
    <div class="bolao-wrap">
      <table class="bolao-table">
        <thead><tr><th class="confronto-col">Confronto</th>${headerCols}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderBolaoParticipant(participantName) {
  const p = PARTICIPANTS.find(x => x.name === participantName);
  if (!p) return '';
  const data = getBolaoData();

  const stageOrder = ['GROUP_STAGE','LAST_32','LAST_16','QUARTER_FINALS','SEMI_FINALS','THIRD_PLACE','FINAL'];
  const sorted = [...allMatches].filter(m => {
    const entry = data[m.id] || {};
    const pal = entry[p.name] || {};
    return pal.home !== undefined && pal.away !== undefined;
  }).sort((a, b) => {
    const si = stageOrder.indexOf(a.stage) - stageOrder.indexOf(b.stage);
    if (si !== 0) return si;
    if (a.matchday !== b.matchday) return (a.matchday || 0) - (b.matchday || 0);
    return new Date(a.utcDate) - new Date(b.utcDate);
  });

  let lastStage = null;
  let lastRound = null;
  const rows = sorted.map(m => {
    const actual = getEffectiveScore(m);
    const entry = data[m.id] || {};
    const palpite = entry[p.name] || {};
    const pts = scorePalpite(actual, palpite);
    let ptsClass = 'pts-pending';
    let ptsLabel = '—';
    if (pts === 3) { ptsClass = 'pts-3'; ptsLabel = '✅ 3'; }
    else if (pts === 1) { ptsClass = 'pts-1'; ptsLabel = '🟡 1'; }
    else if (pts === 0) { ptsClass = 'pts-0'; ptsLabel = '❌ 0'; }

    let separator = '';
    if (m.stage === 'GROUP_STAGE') {
      const round = m.matchday || 0;
      if (round !== lastRound) {
        lastRound = round;
        separator = `<tr class="bolao-round-header"><td colspan="3">⚽ ${ROUND_LABELS[round] || `Rodada ${round}`}</td></tr>`;
      }
    } else if (m.stage !== lastStage) {
      lastStage = m.stage;
      separator = `<tr class="bolao-round-header"><td colspan="3">🏆 ${STAGE_LABELS[m.stage] || m.stage}</td></tr>`;
    }

    const hFlag = m.homeTeam?.crest ? `<img src="${m.homeTeam.crest}" width="14" height="14" style="vertical-align:middle;flex-shrink:0;object-fit:contain">` : '';
    const aFlag = m.awayTeam?.crest ? `<img src="${m.awayTeam.crest}" width="14" height="14" style="vertical-align:middle;flex-shrink:0;object-fit:contain">` : '';
    const home = m.homeTeam?.shortName || m.homeTeam?.name || '?';
    const away = m.awayTeam?.shortName || m.awayTeam?.name || '?';
    const rH = actual.home !== null ? actual.home : '-';
    const rA = actual.away !== null ? actual.away : '-';

    const palpiteStr = (palpite.home !== undefined && palpite.away !== undefined)
      ? `${palpite.home} x ${palpite.away}` : '—';

    return `
      ${separator}
      <tr class="participant-detail-row">
        <td class="participant-detail-match">
          <div class="detail-confronto">
            <span class="detail-home">${hFlag} <span>${home}</span></span>
            <span class="detail-score">${rH} x ${rA}</span>
            <span class="detail-away"><span>${away}</span> ${aFlag}</span>
          </div>
          <div class="match-meta">${formatDateTime(m.utcDate)}</div>
        </td>
        <td class="participant-detail-palpite">${palpiteStr}</td>
        <td class="participant-cell ${ptsClass}" style="text-align:center;font-weight:700">${ptsLabel}</td>
      </tr>
    `;
  }).join('');

  return `
    <div class="participant-detail-header">
      <button class="btn btn-back-participant" data-action="back-participant">← Voltar</button>
      <span class="participant-tag" style="background:${p.color};font-size:1rem;padding:8px 20px">${p.fullName || p.name}</span>
    </div>
    <div class="bolao-wrap" style="margin-top:16px">
      <table class="bolao-table" style="table-layout:fixed">
        <thead>
          <tr>
            <th style="text-align:left;padding:10px 12px;width:60%">Confronto</th>
            <th style="text-align:center;background:${p.color};color:#fff;padding:10px 12px;width:25%">Palpite</th>
            <th style="text-align:center;padding:10px 12px;width:15%">Pts</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderBolaoContent() {
  if (activeBolaoParticipant) {
    return renderBolaoParticipant(activeBolaoParticipant);
  }

  if (activeBolaoTab === 'GERAL') {
    return `
      <h3 class="bolao-phase-title">Ranking Geral — clique em um nome para ver os palpites</h3>
      <div id="bolaoRanking">${renderBolaoRanking()}</div>
    `;
  }

  const stageMatches = allMatches
    .filter(m => m.stage === activeBolaoTab)
    .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));

  const label = STAGE_LABELS[activeBolaoTab] || activeBolaoTab;

  return `
    <h3 class="bolao-phase-title">Ranking — ${label}</h3>
    <div id="bolaoRanking">${renderBolaoRanking(activeBolaoTab)}</div>
    <h3 class="bolao-phase-title">Palpites — ${label}</h3>
    ${renderBolaoMatchesTable(stageMatches)}
  `;
}

function renderBolao() {
  if (!allMatches.length) return '<p class="match-meta">Busque os confrontos para preencher o bolão.</p>';

  const subTabs = [
    { id: 'GERAL', label: 'Ranking Geral' },
    { id: 'GROUP_STAGE', label: 'Fase de Grupos' },
    { id: 'LAST_16', label: 'Oitavas de Final' },
    { id: 'QUARTER_FINALS', label: 'Quartas de Final' },
    { id: 'SEMI_FINALS', label: 'Semifinais' },
    { id: 'THIRD_PLACE', label: '3º Lugar' },
    { id: 'FINAL', label: 'Final' },
  ];

  const subTabsHtml = subTabs.map(t => `
    <button class="bolao-sub-tab${activeBolaoTab === t.id ? ' active' : ''}" data-tab="${t.id}">${t.label}</button>
  `).join('');

  return `
    <p class="match-meta">
      3 pontos por placar exato · 1 ponto por acertar o vencedor ou o empate · 0 por erro
    </p>
    <nav class="bolao-sub-tabs">${subTabsHtml}</nav>
    <div id="bolaoContent">${renderBolaoContent()}</div>
  `;
}

function setupAutoRefresh() {
  if (autoRefreshTimer) {
    clearInterval(autoRefreshTimer);
    autoRefreshTimer = null;
  }
  if (els.autoRefresh.checked) {
    autoRefreshTimer = setInterval(fetchMatches, 60000);
  }
}

els.btnSettings.addEventListener('click', () => {
  els.settingsPanel.classList.toggle('hidden');
});

els.btnSaveKey.addEventListener('click', () => {
  setApiKey(els.apiKey.value.trim());
  showStatus('Chave salva.', 'info');
  setTimeout(() => showStatus('', null), 2000);
});

els.btnRefresh.addEventListener('click', fetchMatches);

els.autoRefresh.addEventListener('change', () => {
  localStorage.setItem('copa2026_auto_refresh', els.autoRefresh.checked ? '1' : '0');
  setupAutoRefresh();
});

els.tabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab');
  if (!btn) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  activeStage = btn.dataset.stage;
  activeBolaoParticipant = null;
  render();
});

els.content.addEventListener('click', (e) => {
  // Back button from individual participant view
  if (e.target.closest('[data-action="back-participant"]')) {
    activeBolaoParticipant = null;
    document.getElementById('bolaoContent').innerHTML = renderBolaoContent();
    return;
  }

  // Click on participant name in ranking → open individual view
  const tag = e.target.closest('.participant-tag');
  if (tag && e.target.closest('#bolaoRanking')) {
    const fullName = tag.textContent.trim();
    const p = PARTICIPANTS.find(x => (x.fullName || x.name) === fullName);
    if (p) {
      activeBolaoParticipant = p.name;
      document.getElementById('bolaoContent').innerHTML = renderBolaoContent();
      return;
    }
  }

  const subTab = e.target.closest('.bolao-sub-tab');
  if (!subTab) return;
  activeBolaoTab = subTab.dataset.tab;
  activeBolaoParticipant = null;
  document.querySelectorAll('.bolao-sub-tab').forEach(t => t.classList.remove('active'));
  subTab.classList.add('active');
  document.getElementById('bolaoContent').innerHTML = renderBolaoContent();
});

els.content.addEventListener('input', (e) => {
  const bolaoInput = e.target.closest('.bolao-input');
  if (bolaoInput) {
    const matchId = bolaoInput.dataset.matchId;
    const participant = bolaoInput.dataset.participant;
    saveBolaoEntry(matchId, participant, bolaoInput.dataset.side, bolaoInput.value);

    const match = allMatches.find(m => String(m.id) === String(matchId));
    if (match) {
      const actual = getEffectiveScore(match);
      const palpite = (getBolaoData()[matchId] || {})[participant] || {};
      const pts = scorePalpite(actual, palpite);
      const cell = bolaoInput.closest('.participant-cell');
      cell.classList.remove('pts-pending', 'pts-3', 'pts-1', 'pts-0');
      cell.classList.add(pts === 3 ? 'pts-3' : pts === 1 ? 'pts-1' : pts === 0 ? 'pts-0' : 'pts-pending');
    }

    const rankingDiv = els.content.querySelector('#bolaoRanking');
    if (rankingDiv) rankingDiv.innerHTML = renderBolaoRanking();
    return;
  }

  const input = e.target.closest('.score-input');
  if (!input || input.classList.contains('bolao-input')) return;

  const matchId = input.dataset.matchId;
  const side = input.dataset.side;
  saveScoreOverride(matchId, side, input.value);

  if (activeStage !== 'GROUP_STAGE') return;

  const groupBlock = input.closest('.group-block');
  if (!groupBlock) return;
  const groupName = groupBlock.dataset.group;
  const matches = allMatches
    .filter(m => m.stage === 'GROUP_STAGE' && (m.group || 'Grupo') === groupName)
    .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
  const standings = computeStandings(matches);
  groupBlock.querySelector('.standings-wrap').innerHTML = renderStandingsTable(standings);
});

els.btnClearScores.addEventListener('click', () => {
  if (!confirm('Tem certeza que deseja apagar todos os placares preenchidos por você?')) return;
  localStorage.removeItem('copa2026_scores');
  render();
});

els.btnExport.addEventListener('click', () => {
  const payload = {
    matches: allMatches,
    scores: getScoreOverrides(),
    bolao: getBolaoData(),
    updated: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(url);
});

async function loadRemoteData() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error(`Erro ${res.status}`);
    const data = await res.json();
    allMatches = data.matches || [];
    remoteData.scores = data.scores || {};
    remoteData.bolao = data.bolao || {};
    if (data.updated) setLastUpdated(new Date(data.updated));
    render();
  } catch (err) {
    console.error(err);
    els.emptyState.textContent = 'Não foi possível carregar os dados (data.json). Peça ao administrador para publicar uma atualização.';
    els.emptyState.classList.remove('hidden');
  }
}

function init() {
  if (READ_ONLY) {
    document.body.classList.add('read-only');
    els.viewerBanner.classList.remove('hidden');
    loadRemoteData();
    return;
  }

  els.apiKey.value = getApiKey();
  els.autoRefresh.checked = localStorage.getItem('copa2026_auto_refresh') === '1';
  loadCache();
  setupAutoRefresh();
  if (!getApiKey()) {
    els.settingsPanel.classList.remove('hidden');
  }
}

init();
