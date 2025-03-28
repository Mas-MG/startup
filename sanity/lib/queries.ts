import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type=="startup" && defined(slug.current) && !defined($search) || title match $search || author->name match $search || category match $search] | order(_createdAt desc){
    _id,
    title,
    slug,
    image,
    views,
    description,
    category,
    _createdAt,
    author -> {
      _id,
      name,
      image,
      bio
    }
}`);
