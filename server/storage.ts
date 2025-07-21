import { 
  users, 
  zodiacProfiles, 
  horoscopeReads, 
  compatibilityChecks, 
  nftCollection,
  type User, 
  type InsertUser,
  type ZodiacProfile,
  type InsertZodiacProfile,
  type HoroscopeRead,
  type InsertHoroscopeRead,
  type CompatibilityCheck,
  type InsertCompatibilityCheck,
  type NftCollection,
  type InsertNftCollection
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createZodiacProfile(profile: InsertZodiacProfile & { zodiacSign: string }): Promise<ZodiacProfile>;
  getZodiacProfileByUserId(userId: number): Promise<ZodiacProfile | undefined>;
  
  createHoroscopeRead(read: InsertHoroscopeRead): Promise<HoroscopeRead>;
  getHoroscopeReadsByUserId(userId: number): Promise<HoroscopeRead[]>;
  
  createCompatibilityCheck(check: InsertCompatibilityCheck): Promise<CompatibilityCheck>;
  getCompatibilityChecksByUserId(userId: number): Promise<CompatibilityCheck[]>;
  
  createNftItem(nft: InsertNftCollection): Promise<NftCollection>;
  getNftCollectionByUserId(userId: number): Promise<NftCollection[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private zodiacProfiles: Map<number, ZodiacProfile>;
  private horoscopeReads: Map<number, HoroscopeRead>;
  private compatibilityChecks: Map<number, CompatibilityCheck>;
  private nftCollection: Map<number, NftCollection>;
  private currentUserId: number;
  private currentZodiacId: number;
  private currentHoroscopeId: number;
  private currentCompatibilityId: number;
  private currentNftId: number;

  constructor() {
    this.users = new Map();
    this.zodiacProfiles = new Map();
    this.horoscopeReads = new Map();
    this.compatibilityChecks = new Map();
    this.nftCollection = new Map();
    this.currentUserId = 1;
    this.currentZodiacId = 1;
    this.currentHoroscopeId = 1;
    this.currentCompatibilityId = 1;
    this.currentNftId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createZodiacProfile(insertProfile: InsertZodiacProfile & { zodiacSign: string }): Promise<ZodiacProfile> {
    const id = this.currentZodiacId++;
    const profile: ZodiacProfile = { 
      ...insertProfile,
      userId: insertProfile.userId || null,
      id, 
      createdAt: new Date() 
    };
    this.zodiacProfiles.set(id, profile);
    return profile;
  }

  async getZodiacProfileByUserId(userId: number): Promise<ZodiacProfile | undefined> {
    return Array.from(this.zodiacProfiles.values()).find(
      (profile) => profile.userId === userId
    );
  }

  async createHoroscopeRead(insertRead: InsertHoroscopeRead): Promise<HoroscopeRead> {
    const id = this.currentHoroscopeId++;
    const read: HoroscopeRead = { 
      ...insertRead,
      userId: insertRead.userId || null,
      id, 
      createdAt: new Date() 
    };
    this.horoscopeReads.set(id, read);
    return read;
  }

  async getHoroscopeReadsByUserId(userId: number): Promise<HoroscopeRead[]> {
    return Array.from(this.horoscopeReads.values()).filter(
      (read) => read.userId === userId
    );
  }

  async createCompatibilityCheck(insertCheck: InsertCompatibilityCheck): Promise<CompatibilityCheck> {
    const id = this.currentCompatibilityId++;
    const check: CompatibilityCheck = { 
      ...insertCheck,
      userId: insertCheck.userId || null,
      id, 
      createdAt: new Date() 
    };
    this.compatibilityChecks.set(id, check);
    return check;
  }

  async getCompatibilityChecksByUserId(userId: number): Promise<CompatibilityCheck[]> {
    return Array.from(this.compatibilityChecks.values()).filter(
      (check) => check.userId === userId
    );
  }

  async createNftItem(insertNft: InsertNftCollection): Promise<NftCollection> {
    const id = this.currentNftId++;
    const nft: NftCollection = { 
      ...insertNft,
      userId: insertNft.userId || null,
      tokenId: insertNft.tokenId || null,
      id, 
      mintedAt: new Date() 
    };
    this.nftCollection.set(id, nft);
    return nft;
  }

  async getNftCollectionByUserId(userId: number): Promise<NftCollection[]> {
    return Array.from(this.nftCollection.values()).filter(
      (nft) => nft.userId === userId
    );
  }
}

export const storage = new MemStorage();
