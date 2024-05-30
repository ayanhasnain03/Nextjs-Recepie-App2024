import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecepieList = ({ recepieList }) => {
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <Link className="mb-10 underline" href={"/"}>Go Home</Link>

      <h2 className="text-4xl font-bold text-gray-800 m-12">Recepies</h2>      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols3 gap-8">
        {recepieList && recepieList.length > 0
          ? recepieList.map((recepie) => (
              <Link href={`/recepie-list/${recepie.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                    <div className="w-full aspect-w-15 aspect-h-8 lg:h-80">
                      <img
                        src={recepie.image}
                        alt={recepie.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recepie.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: {recepie.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold">{recepie.cuisine}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default RecepieList;
