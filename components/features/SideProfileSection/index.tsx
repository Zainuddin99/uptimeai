import { data } from "@/data";
import {
  Building,
  Link,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Twitter,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const lists: { icon: LucideIcon; text: string }[] = [
  {
    icon: Building,
    text: data.profile.company,
  },
  {
    icon: MapPin,
    text: data.profile.location,
  },
  { icon: Mail, text: data.profile.email },
  { icon: Link, text: data.profile.website },
  { icon: Linkedin, text: data.profile.linkedin },
  { icon: Twitter, text: data.profile.twitter },
];

export const SideProfileSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="/git-user-profile.jpg"
        height={296}
        width={296}
        alt="git profile"
        className="md:w-full md:h-auto rounded-full h-36 w-36"
      />

      <div>
        <h1 className="text-2xl font-semibold">{data.profile.name}</h1>
        <h2 className="text-xl text-(--mute-text)">{data.profile.username}</h2>
      </div>

      <button className="w-full bg-gray-100 px-4 py-2 text-sm border border-gray-300 rounded-md">
        Follow
      </button>

      <p className="text-(--mute-text)">{data.profile.bio}</p>

      <div className="flex items-center gap-1 text-sm">
        <UsersRound
          size={14}
          className="text-(--icon-color)"
        />
        <span className="font-semibold">{data.profile.followers}</span>
        <span className="text-(--mute-text)">Followers</span>
        <span>.</span>
        <span className="font-semibold">{data.profile.following}</span>
        <span className="text-(--mute-text)">Following</span>
      </div>

      <ul className="flex flex-col gap-2 pb-4 border-b border-b-gray-200">
        {lists.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.text}
              className="flex gap-2 items-center"
            >
              <Icon
                size={16}
                className="text-(--icon-color)"
              />
              <span className="text-sm text-(--mute-text)">{item.text}</span>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Achievements</h3>
        <div className="flex gap-1">
          {["quickdraw", "yolo", "pull-shark"].map((item) => (
            <Image
              key={item}
              src={`/${item}.png`}
              alt={item}
              height={64}
              width={64}
            />
          ))}
        </div>
        <div className="font-semibold text-gray-500 text-sm">Block or Report</div>
      </div>
    </div>
  );
};
