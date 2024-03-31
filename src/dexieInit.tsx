import {
  activeData,
  marketData,
  savedData,
  trendingData,
} from "data/itemsData";
import Dexie, { Table } from "dexie";

export interface Saved {
  id: string;
  artName: string;
  artistName: string;
  bidPrice: Number;
  artImage: string;
  description: string;
}

export interface Active {
  id: string;
  artName: string;
  artistName: string;
  bidPrice: Number;
  artImage: string;
  description: string;
}

export interface Market {
  id: string;
  artName: string;
  artistName: string;
  bidPrice: Number;
  artImage: string;
  description: string;
}

export interface Trending {
  id: string;
  artName: string;
  artistName: string;
  bidPrice: Number;
  artImage: string;
  description: string;
}

export class MySubClassedDexie extends Dexie {
  Saved!: Table<Saved>;
  Trending!: Table<Trending>;
  Active!: Table<Active>;
  Market!: Table<Market>;

  constructor() {
    super("myDatabase");
    this.version(1).stores({
      Saved: "id, artName, artistName, bidPrice, artImage, description",
      Trending: "id, artName, artistName, bidPrice, artImage, description",
      Active: "id, artName, artistName, bidPrice, artImage, description",
      Market: "id, artName, artistName, bidPrice, artImage, description",
    });
  }
}

export const insertIntoDb = () => {
  const db = new MySubClassedDexie();

  savedData?.map((item) => {
    db.Saved.add({
      id: item?.id,
      artName: item?.artName,
      artistName: item?.artistName,
      bidPrice: item?.bidPrice,
      artImage: item?.artImage,
      description: item?.description,
    });
  });

  trendingData?.map((item) => {
    db.Trending.add({
      id: item?.id,
      artName: item?.artName,
      artistName: item?.artistName,
      bidPrice: item?.bidPrice,
      artImage: item?.artImage,
      description: item?.description,
    });
  });

  marketData?.map((item) => {
    db.Market.add({
      id: item?.id,
      artName: item?.artName,
      artistName: item?.artistName,
      bidPrice: item?.bidPrice,
      artImage: item?.artImage,
      description: item?.description,
    });
  });

  activeData?.map((item) => {
    db.Active.add({
      id: item?.id,
      artName: item?.artName,
      artistName: item?.artistName,
      bidPrice: item?.bidPrice,
      artImage: item?.artImage,
      description: item?.description,
    });
  });
};
