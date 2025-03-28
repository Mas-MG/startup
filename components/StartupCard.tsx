import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard=Omit<Startup,"author"> & {author?:Author};


const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    title,
    views,
    author,
    _id,
    description,
    image,
    category
  } = post;


  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-16-medium line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
        <Image src={'/IC1EXIMymw35JeZPi27Z6Wb6LIv59juvr01z76QZ.jpg'} alt="placeholder" width={48} height={48}  className="rounded-full object-cover h-12"/>
        </Link>
      </div>
      <div>
      <p className="startup-card_desc">{description}</p>
        <img className="startup-card_img" src={image} alt="PH" />
      </div>
        <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${category?.toLocaleLowerCase()}`}>
            <p>{category}</p>
            </Link>
            <Button className="startup-card_btn" asChild>
                <Link href={`/startup/${_id}`}>
                Details
                </Link>
            </Button>
        </div>
    </li>
  );
};

export default StartupCard;
