import { useParams } from "react-router-dom";

const patients = [
  {
      id: "aarav",
      image:
        "https://picsum.photos/id/1027/600/400",
      name: "Aarav",
      age: 7,
      location: "Pune",
      condition: "Heart Surgery",
      estimatedCost: "₹3,50,000",
      story:
        "Aarav is a bright 7-year-old from Pune with a congenital heart defect.",
      details:
        "Aarav was born with a congenital heart defect that has been causing him severe health issues. Despite his young age, he has shown incredible resilience and spirit. His parents have been struggling to afford the necessary surgery, which is estimated to cost ₹3,50,000. Aarav's condition requires urgent attention, and with the right medical care, he has a good chance of leading a healthy life. Your support can make a life-changing difference for Aarav and his family."
    },
    {
      id: "meera",
      image:
        "https://picsum.photos/id/1005/600/400",
      name: "Meera",
      age: 9,
      location: "Nashik",
      condition: "Bone Marrow Treatment",
      estimatedCost: "₹5,00,000",
      story:
        "Nine-year-old Meera from Nashik is battling a serious blood disorder.",
        details:"Meera was diagnosed with a severe blood disorder that has left her weak and in constant need of medical care. Her family has been doing everything they can to support her, but the cost of bone marrow treatment is overwhelming. The estimated cost for Meera's treatment is ₹5,00,000, which is beyond the reach of her family. With your help, Meera can receive the life-saving treatment she needs to fight this disease and regain her health."
    },
    {
      id: "rohan",
      image:
        "https://picsum.photos/id/1011/600/400",
      name: "Rohan",
      age: 5,
      location: "Aurangabad",
      condition: "Kidney Surgery",
      estimatedCost: "₹2,75,000",
      story:
        "Five-year-old Rohan needs kidney surgery to lead a normal life.",
        details:"Rohan has been suffering from a severe kidney condition that has been affecting his quality of life. He requires urgent kidney surgery to prevent further complications and to allow him to lead a normal, healthy life. The estimated cost for Rohan's surgery is ₹2,75,000, which is a significant financial burden for his family. Your support can help Rohan get the medical care he needs and give him a chance at a brighter future."
    },
    {
      id: "saniya",
      image:
        "https://picsum.photos/id/1007/600/400",
      name: "Saniya",
      age: 11,
      location: "Mumbai",
      condition: "Spinal Treatment",
      estimatedCost: "₹4,25,000",
      story:
        "Saniya has a spinal condition that requires corrective surgery.",
        details:"Saniya has been diagnosed with a spinal condition that is causing her severe pain and mobility issues. She needs corrective surgery to alleviate her symptoms and improve her quality of life. The estimated cost for Saniya's treatment is ₹4,25,000, which is a significant financial challenge for her family. With your help, Saniya can receive the necessary medical care to address her condition and regain her mobility and independence."
    },
    {
      id: "vihaan",
      image:
        "https://picsum.photos/id/1031/600/400",
      name: "Vihaan",
      age: 6,
      location: "Nagpur",
      condition: "Liver Treatment",
      estimatedCost: "₹3,00,000",
      story:
        "Vihaan requires urgent liver treatment and continuous medical care.",
        details:"Vihaan has been diagnosed with a severe liver condition that requires urgent treatment and continuous medical care. His family has been struggling to manage the costs associated with his condition, which is estimated to be around ₹3,00,000. Vihaan's health is deteriorating rapidly, and without the necessary treatment, his prognosis is poor. Your support can help Vihaan receive the life-saving care he needs and give him a chance at a healthier future."
    },
];

const PatientDetail = () => {
  const { id } = useParams();
  const patient = patients.find((p) => p.id === id);

  if (!patient) return <div className="pt-40 text-center">Patient Not Found</div>;

  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10">

        <img
          src={patient.image}
          alt={patient.name}
          className="w-full h-80 object-cover rounded-2xl mb-6"
        />

        <h1 className="text-4xl font-bold mb-2">{patient.name}</h1>
        <p className="text-gray-600 mb-4">
          {patient.age} years • {patient.location}
        </p>

        <h3 className="text-[#1B8A5A] font-semibold text-xl mb-4">
          {patient.condition}
        </h3>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {patient.details}
        </p>

        <div className="mb-6">
          <p className="text-sm text-gray-500">Estimated Cost</p>
          <p className="text-3xl font-bold text-[#1B8A5A]">
            {patient.estimatedCost}
          </p>
        </div>

        <button className="bg-[#1B8A5A] text-white px-8 py-3 rounded-full hover:bg-[#156B47] transition">
          Support This Case
        </button>

      </div>
    </div>
  );
};

export default PatientDetail;
