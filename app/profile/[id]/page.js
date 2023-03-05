import prisma from "@/lib/prisma";
import Link from "next/link";

async function getprofile(profileID) {
  const profile = prisma.users.findUnique({
    where: {
      id: parseInt(profileID, 10),
    },
  });
  return profile;
}

export default async function listprofile({ params }) {
  const profile = await getprofile(params.id);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white border border-gray-300 rounded p-4 mb-4">
        <p className="text-gray-600">Name : {profile.display_name}</p>
        <p className="text-gray-600">Email : {profile.email}</p>
        <p className="text-gray-600">Bio : {profile.bio}</p>

        <p className="text-gray-600">Location : {profile.location}</p>
        <p className="text-gray-600">Website : {profile.website_url}</p>
        <p className="text-gray-600">Reputation : {profile.reputation}</p>

        <p className="text-gray-600">Creation Date : {profile.creation_date}</p>
        <p className="text-gray-600">
          Last Access Date : {profile.last_access_date}
        </p>
        <p className="text-gray-600">Views : {profile.views}</p>

        <p className="text-gray-600">Up Votes : {profile.up_votes}</p>
        <p className="text-gray-600">Down Votes : {profile.down_votes}</p>
        <p className="text-gray-600">Age : {profile.age}</p>

        <div className="text-gray-600 flex">
          About Me :
          <div
            dangerouslySetInnerHTML={{ __html: profile.about_me }}
            className="text-gray-600"
          ></div>
        </div>
        <p className="text-gray-600">Views : {profile.views}</p>

        <Link
          style={{
            color: "#333",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          href={`/u/${profile.id}`}
        >
          To view my posts Click here
        </Link>
      </div>
    </div>
  );
}
