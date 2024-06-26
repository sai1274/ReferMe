import React, {useState, useEffect} from "react";
import CompanyCard from "../components/CompanyCard";
import { COMPANIES } from "../constants";
import Search from "../components/Search";
import Fuse from "fuse.js";

export default function Referrals() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(COMPANIES);

  const fuse = new Fuse(COMPANIES, {
    includeScore: true,
    includeMatches: true,
    threshold: 0.5,
    keys: ["name", "age", "email"]
  });
  useEffect(() => {
    const results = fuse.search(query);
    if(query.length===0){
      setSearchResults(COMPANIES);
    }
    else{
      setSearchResults(results.map(result => result.item));
    }
  }, [query])

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col px-32 py-24 mx-auto">
          <div className="w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Get referred to over{" "}
              <span className="text-violet-600">1000+ companies</span>
            </h1>
            <p className="lg:w-2/3 leading-relaxed text-base">
              Select a company you want a referral for, enter the URL for the
              job posting that you want, and send your profile off to our
              referrers!
            </p>
          </div>
          <Search setQuery={setQuery}/>
          <h1 className="sm:text-3xl text-xl font-bold title-font mb-4 text-gray-900">
            Companies
          </h1>
          {/* Company List */}
          <div className="flex flex-wrap -m-2">
            {searchResults.map((company, idx) => (
              <>
                <CompanyCard
                  name={company.name}
                  logo={company.logo}
                  sectors={company.sectors}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
