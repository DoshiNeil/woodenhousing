const details = {
  "1st Floor": {
    "Total area": "97 sqft",
    Rooms: [
      "Living room",
      "Open kitchen",
      "Double bedroom",
      "Fixed wardrobes",
      "Bathroom laundry room",
      "Storage room",
      "Technical room",
    ],
  },
};

export default function FeatureList({floor}:{floor:string}) {
  return (
    <div className="flex flex-col gap-4 bg-[#f5f5f5] rounded-lg p-6 mt-4">
      <h5 className="font-lexend font-medium text-3xl leading-7">{floor} Floor</h5>
      <p className="font-lexend font-normal text-xl leading-7">
        Total Area: {details["1st Floor"]["Total area"]}
      </p>
      <ul>
        {details["1st Floor"].Rooms.map((r) => (
          <li key={r} className="flex py-2 gap-2">
            <img src="/checkIcon.svg" /> <p className="font-lexend font-normal text-lg">{r}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
