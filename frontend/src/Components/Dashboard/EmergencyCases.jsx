import { HeartIcon } from "@heroicons/react/24/outline";
import emergencyCases from "../../data/emergencyCases";
import EmergencyCard from "./EmergencyCard";

export default function EmergencyCases() {
    return (
        <div className="p-6">
        
        <div className="flex items-center mb-6">
            <HeartIcon className="w-6 h-6 text-red-500 mr-2" />
            <h2 className="text-2xl font-bold">Emergency Cases</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyCases.map((c) => (
            <EmergencyCard key={c.id} caseData={c} />
            ))}
        </div>
        </div>
    );
}
