// all equipment should be stored together, mfgs. make all sorts of stuff in
// different sectors.

enum equipmentTypes {
  kettle = 'kettle',
  grinder = 'grinder',
  brewer = 'brewer',
}

enum brewMethods {
  decoction = 'decoction',
  infusion = 'infusion',
  gravity = 'gravity',
  pressure = 'pressure',
}

interface IEquipment {
  id: number;
  type: equipmentTypes;
  manufacturerId: number;
  model: string;
  notes?: string[];
}

export interface IGrinder extends IEquipment {
  burrShape: string;
}

export interface IKettle extends IEquipment {
  pid: boolean;
}

export interface IBrewer extends IEquipment {
  materials: string[];
  brewerMethod: brewMethods;
}

export const myGrinder: IGrinder = {
  id: 0,
  type: equipmentTypes.grinder,
  manufacturerId: 2,
  model: 'Lagom Mini',
  burrShape: 'conical',
  notes: ['step-less. grind markers are 0-9, but can `over-rotate` 3x'],
};
export const myGrinder2: IGrinder = {
  id: 3,
  type: equipmentTypes.grinder,
  manufacturerId: 4,
  model: 'Bistro',
  burrShape: 'conical',
  notes: [
    'step-less. grind markers are unmarked, hopper unseats at widest grind size.',
  ],
};

export const myKettle: IKettle = {
  id: 1,
  type: equipmentTypes.kettle,
  manufacturerId: 1,
  model: 'Stagg EKG',
  notes: undefined,
  pid: true,
};
export const myKettle2: IKettle = {
  id: 4,
  type: equipmentTypes.kettle,
  manufacturerId: 6,
  model: '1.0 Liter Digital Variable Temperature Gooseneck Kettle',
  notes: undefined,
  pid: true,
};

export const myBrewer: IBrewer = {
  id: 2,
  type: equipmentTypes.brewer,
  manufacturerId: 3,
  model: 'V60',
  notes: ['clear size 02'],
  materials: ['plastic'],
  brewerMethod: brewMethods.gravity,
};
export const myBrewer2 = {
  id: 5,
  type: equipmentTypes.brewer,
  manufacturerId: 5,
  model: 'AeroPress',
  notes: ['V2? opaque grey plastic, default filters, default cap'],
  materials: ['plastic'],
  brewerMethod: brewMethods.pressure,
};

const manufacturers: object[] = [
  {
    id: 0,
    name: 'Unknown / Generic',
    productIds: [],
  },
  {
    id: 1,
    name: 'Fellow',
    productIds: [1],
  },
  {
    id: 2,
    name: 'Option-O',
    productIds: [0],
  },
  {
    id: 3,
    name: 'Hario',
    productIds: [2],
  },
  {
    id: 4,
    name: 'Bodum',
    productIds: [3],
  },
  {
    id: 5,
    name: 'Aeropress',
    productIds: [5],
  },
  {
    id: 6,
    name: 'Bonavita',
    productIds: [4],
  },
];
