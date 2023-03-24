export class Personnage {
    id?: string;
    name: string;
    description: string;
    rarity:string;
    class:string;
    manufacturer:string;
    weapon: string;
    skill_name: string;
    skill_description: string;
    face_url:string;
    full_picture_url:string;
    
    constructor(){
        this.name ='';
        this.description = '';
        this.rarity='';
        this.class='';
        this.manufacturer='';
        this.weapon='';
        this.skill_name='';
        this.skill_description='';
        this.face_url='';
        this.full_picture_url='';
    }
}
