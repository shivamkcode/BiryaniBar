"use client";
import React, { useState, useEffect } from "react";
import SubHeading from "./SubHeading";
import Select from "./Select";
import Sign from "./Sign";

const Reservations = () => {
  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);
  const people = [
    "1 Person",
    "2 People",
    "3 People",
    "4 People",
    "5 People",
    "6 People",
    "7 People",
  ];

  const [reservation, setReservation] = useState({
    people: people[0],
    date: "",
    time: "",
  });

  const handleBookNow = () => {
    console.log(reservation);
  };

  useEffect(() => {
    // Generate dates for the next 7 days
    const today = new Date();
    const dateOptions = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dateOptions.push(date.toISOString().split("T")[0]); // Format: YYYY-MM-DD
    }
    setDates(dateOptions);

    // Generate time slots for today after the current time
    const currentHour = today.getHours();
    const timeOptions = [];
    for (let hour = currentHour + 1; hour < 24; hour++) {
      timeOptions.push(`${hour}:00`);
      timeOptions.push(`${hour}:30`);
    }
    setTimes(timeOptions);
  }, []);

  useEffect(() => {
    if (dates.length > 0 && times.length > 0) { 
      setReservation({ ...reservation, date: dates[0], time: times[0] });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates, times]);

  return (
    <div className="flex items-center justify-center paddingX paddingY relative">
        <Sign direction="left" />
      <div className="flex flex-col items-center justify-center gap-10 bg-black text-center border border-golden/20 p-8 shadow-golden/10 shadow-lg">
        <div>
          <SubHeading direction="center" title="Reservations" />
          <h2 className="h2_title">Book A Table</h2>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-6 text-grey text-left text-sm w-full">
          <Select label="People" options={people} onChange={(value) => setReservation({ ...reservation, people: value })} />
          {dates.length > 0 && (
            <Select label="Date" options={dates} onChange={(value) => setReservation({ ...reservation, date: value })} />
          )}
          {times.length > 0 && (
            <Select label="Time" options={times} onChange={(value) => setReservation({ ...reservation, time: value })} />
          )}
        </div>
        <button className=" bg-golden hover:bg-crimson font-base font-bold tracking-wider leading-5 text-base py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer text-black" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default Reservations;
