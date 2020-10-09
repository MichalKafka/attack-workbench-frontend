import {StixObject} from "./stix-object";
import { Relationship } from './relationship';

export class Group extends StixObject {
    public name: string;
    public description: string;
    public aliases: string[];

    constructor(sdo?: any) {
        super(sdo, "intrusion-set");
        if (sdo) {
            this.name = sdo.name;
            this.description = sdo.description;
            this.aliases = sdo.aliases;
        }

        this.displaySettings = { //setup display of technique
            tableColumns: [
                {
                    "property": "name",
                    "display": "plain"
                },
                {
                    "property": "aliases",
                    "display": "tags"
                },
                {
                    "property": "version",
                    "display": "plain"
                },
                {
                    "property": "modified",
                    "display": "date"
                }
            ],
            tableDetail: [
                {
                    "property": "description",
                    "display": "descriptive"
                }
            ],
            viewCard: [

            ],
            viewMain: [

            ]
        }
    }

}
