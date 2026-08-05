import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "हमारी टीम",
  description: "हमारा मोर्चा की संपादकीय टीम और प्रतिनिधि।",
};

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  designation?: string;
  address?: string;
  phone?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "अश्विनी कुमार शुक्ला",
    role: "प्रधान संपादक",
    photo: "/images/2.jpeg",
    address: "शुक्ला सदन, ग्रामः बैदौला-272189, सिद्धार्थनगर।",
    phone: "9918921792",
    email: "ashwini@hamaramorcha.com",
  },
  {
    name: "वंदना शुक्ला",
    role: "संपादक",
    photo: "/images/3.jpeg",
    address: "शुक्ला सदन, ग्रामः बैदौला-272189, सिद्धार्थनगर।",
    email: "editor@hamaramorcha.com",
  },
  {
    name: "कामता प्रसाद",
    role: "कार्यकारी संपादक",
    photo: "/images/4.jpg",
    address: "तिवारी भवन, ग्रामः गहरपुर, पोस्टः पुआरीकलाँ-221202, वाराणसी।",
    phone: "9996865069",
    email: "hamaramorcha1153@gmail.com",
  },
  {
    name: "सुमन तिवारी",
    role: "प्रबंध निदेशक",
    photo: "/images/5.jpg",
    address: "तिवारी भवन, ग्रामः गहरपुर, पोस्टः पुआरीकलाँ-221202, वाराणसी।",
  },
  {
    name: "अखिलेश चौधरी",
    role: "सीनियर रिपोर्टर",
    designation: "प्रभारीः सिद्धार्थनगर, बस्ती और गोरखपुर",
    photo: "/images/6.jpg",
    phone: "7754093975",
  },
  {
    name: "रामचंद्र शुक्ल",
    role: "साहित्य संपादक",
    photo: "/images/rc.jpg",
    address: "548 वी/125, विक्रम नगर, पोस्ट-मानक नगर, लखनऊ-226011",
    phone: "9454413842",
    email: "ramchandra.shukla@hamaramorcha.com",
  },
  {
    name: "चाँदनी तिवारी",
    role: "विशेष प्रतिनिधि",
    designation: "पंजाब-हरियाणा और जम्मू-कश्मीर",
    photo: "/images/chandni.jpg",
    email: "chandni@hamaramorcha.com",
  },
];

export default function TeamPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center mb-10">हमारी टीम</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.email ?? member.name}
            className="border p-4 rounded-md shadow-md"
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={300}
              height={300}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full aspect-square object-contain bg-gray-100 rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-red-500 font-medium">{member.role}</p>

            {member.designation && (
              <p className="text-sm text-gray-500 mt-1">{member.designation}</p>
            )}

            {member.address && (
              <p className="text-sm mt-3 leading-relaxed">{member.address}</p>
            )}

            {member.phone && (
              <p className="text-sm mt-2">
                <a
                  href={`tel:+91${member.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  +91 {member.phone}
                </a>
              </p>
            )}

            {member.email && (
              <p className="text-sm mt-1 break-all">
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
