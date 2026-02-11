import { useParams } from "react-router-dom";

const patients = [
  {
    id: "aarav",
    image: "https://images.pexels.com/photos/3807497/pexels-photo-3807497.jpeg",
    name: "Aarav",
    age: 7,
    location: "Pune",
    condition: "Heart Surgery",
    estimatedCost: "₹3,50,000",
    details:
      "Aarav was diagnosed with a congenital heart defect at birth. Doctors recommend immediate corrective surgery. His family cannot afford the treatment.",
  },
  {
    id: "meera",
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg",
    name: "Meera",
    age: 9,
    location: "Nashik",
    condition: "Bone Marrow Treatment",
    estimatedCost: "₹5,00,000",
    details:
      "Meera requires an urgent bone marrow transplant. The treatment is expensive and time-sensitive.",
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
