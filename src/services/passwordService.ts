export default function generatePass():string{
    let password:string = '';
    let charachters:string = 'Aa@$#123456789!?BbCcDdEeFfGgHhIiJjLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const passWordLength:number = 8;
    for (let index = 0; index < passWordLength; index++) {
        password += charachters.charAt(Math.floor(Math.random() * charachters.length));
    }

    return password;
}