import { create } from "zustand";
import { LabelValue, RealmData } from "@/app/lib/models";
import { EURealms, ServerRegions } from "@/app/lib/realms";

interface RealmState {
  region: LabelValue;
  setRegion: (region: LabelValue) => void;
  realm: RealmData;
  setRealm: (realm: RealmData) => void;
}

export const useRealmStore = create<RealmState>()((set) => ({
  region: ServerRegions[0], //Default to EU
  setRegion: (region: LabelValue) => set({ region: region }),
  realm: EURealms[0], //Default to first EU realm
  setRealm: (realm: RealmData) => set({ realm: realm }),
}));
