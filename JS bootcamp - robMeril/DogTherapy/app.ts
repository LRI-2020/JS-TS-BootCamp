
getDog();

let newDog = document.querySelector('.newDog')! as HTMLButtonElement;

interface dogTherapy{
    message:string,
    status:string
}

function isDogTherapy(value:any): value is dogTherapy{
    if (!value || typeof value !== 'object') {
        return false
    }
    const object = value as Record<string, unknown>;

    return typeof object.message === 'string' && typeof object.status ==='string';
}
function toDogTherapy(data: any) : dogTherapy {
 if(isDogTherapy(data))
     return data as dogTherapy;
 
 throw new Error("expected dog therapy but model received does not match");
}

function displayDogTherapy(dogT: dogTherapy) {
    
    if(dogT.status ==="success"){
        let imgEl = document.querySelector('.dogImg')! as HTMLImageElement;
        imgEl.setAttribute("src",dogT.message);
    }
    
    else{
        throw  new Error("Oops, something gone wrong and your dog has been found.")
    }
}

function getDog() {
    let api="https://dog.ceo/api/breeds/image/random";
    fetch(api).then(data => data.json())
        .then(data => toDogTherapy(data))
        .then(dogT => displayDogTherapy(dogT));
}

newDog.addEventListener('click', function(){
    
    getDog();
})