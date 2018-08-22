const patient = {
    name:"Leslie",
    lastName: "Richards",
    age: 47,
    gender: "female",
    healthCond:["hypertension", "diabetes", "asthma"],
    doctorConsulted:[
        {
            treated: "hypertension",
            doc: "Dr. Sam Edwards",
            docAge: 52,
            docSpecialty: "Cardiology",
            hospital:
            {   
                hospAffil: "Trinity Hospital",
                hospAddress: "815 Care Drive",
                hospCity: "Augusta",
                hospState:"Georgia",
                hospZip:"30901"
            }
        }, 
        {
            treated: ["hypertension", "diabetes", "asthma"],
            doc: "Dr. Erika Vaughn",
            docAge: "45",
            docSpecialty: "Primary Care",
            hospital:
            {   
                hospAffil: "Peach Care Hospital",
                hospAddress: "7325 Randall Street",
                hospCity: "Augusta",
                hospState:"Georgia",
                hospZip:"30907"
            }
        },
        {
            condition: "diabetes",
            doc: "Dr. Stacey Leverett",
            docAge: 34,
            docSpecialty: "Internal Medicine",
            hospital:
            {   
                hospAffil:"VA Hospital of Augusta",
                hospAddress: "2626 Federal Drive",
                hospCity: "Augusta",
                hospState:"Georgia",
                hospZip:"30901"
            }
        }, 
        {
            condition: "asthma",
            doc: "Dr. Eric Jones",
            docAge: 37,
            docSpecialty: "Internal Medicine",
            hospital:
            {   
                hospAffil:"VA Hospital of Augusta",
                hospAddress: "2626 Federal Drive",
                hospCity: "Augusta",
                hospState:"Georgia",
                hospZip:"30901"
            }
        }, 
    ],
    doctorNameOnly: function (){
        const list = [];
        for (var i = 0; i < this.doctorConsulted.length; i++){
            list.push(this.doctorConsulted[i].doc);
        }
        return list;
    }
}

console.log(patient.doctorNameOnly())