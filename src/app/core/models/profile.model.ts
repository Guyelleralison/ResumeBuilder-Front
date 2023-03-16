export class Profile {
    id!: string;
    potitionTitle!: string;

    public static fromJSON(jsonObject: any): Profile {
        return {
            id: jsonObject['id'],
            potitionTitle: jsonObject['positionTitle']
        }
    }
}