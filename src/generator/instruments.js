const BASS = 'BS';
const LEAD1 = 'LEAD1';

const DRUMS = 'DR';
const BD = 'BD';
const SN = 'SN';
const HC = 'HC';
const TM = 'TM';
const PR = 'PR';
const CP = 'CP';

export const all = [BASS, DRUMS, LEAD1];
export const CHILDREN = {
  [DRUMS]: [BD, SN, HC, TM, PR, CP]
};

export default {
  BASS,
  DRUMS,
  BD,
  SN,
  HC,
  TM,
  PR,
  CP,
  LEAD1,
};
