class Grinder {
  id: number;
  manufacturer: string;
  model: string;
  grindRange: number[] | undefined;
  burrShape: string | undefined;
  notes: string[] | undefined;

  constructor(
    id: number,
    model: string,
    manufacturer: string,
    grindRange?: number[],
    burrShape?: string,
    notes?: string[]
  ) {
    this.manufacturer = manufacturer;
    this.id = id;
    this.model = model;
    if (grindRange) this.grindRange = grindRange;
    if (burrShape) this.burrShape = burrShape;
    if (notes) this.notes = notes;
  }
}

class Kettle {
  id: number;
  manufacturer: string;
  model: string;
  notes: string[] | undefined;
  pid: boolean | undefined;

  constructor(
    id: number,
    model: string,
    manufacturer: string,
    pid?: boolean,
    notes?: string[]
  ) {
    this.manufacturer = manufacturer;
    this.id = id;
    this.model = model;
    if (pid) this.pid = pid;
    if (notes) this.notes = notes;
  }
}

class Brewer {
  id: number;
  manufacturer: string;
  model: string;
  notes: string[] | undefined;
  materials: string[] | undefined;
  type: string | undefined;

  constructor(
    id: number,
    model: string,
    manufacturer: string,
    materials?: string[],
    type?: 'decoction' | 'infusion' | 'gravitational' | 'pressurized',
    notes?: string[]
  ) {
    this.manufacturer = manufacturer;
    this.id = id;
    this.model = model;
    if (type) this.type = type;
    if (materials) this.materials = materials;
    if (notes) this.notes = notes;
  }
}

export { Grinder, Kettle, Brewer };
