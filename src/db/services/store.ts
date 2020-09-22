import { Store } from "../model/store";


export default class StoreService {
    public static async add(
        name: string,
        category: string,
        description: string,
        url: string,
        storeImage: string,
        tx: string,
    ): Promise<Store> {
        const txAt = new Date(); // TODO: get tx timestamp
        return Store.create({
            name,
            category,
            description,
            url,
            storeImage,
            tx,
            txAt,
        });
    }

    public static async get(
        storePublicId: string,
    ): Promise<Store | null> {
        return await Store.findOne({ where: { storePublicId }, raw: true });
    }

    public static async getAll(): Promise<Store[]> {
        return await Store.findAll({ raw: true });
    }
}