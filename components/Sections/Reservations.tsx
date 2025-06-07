"use client";
import React, { useState, useEffect } from "react";
import { SubHeading, Select, Sign } from "../index";

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
  const [confirmReservation, setConfirmReservation] = useState(false);
  const [timer, setTimer] = useState(300);

  const handleBookNow = () => {
    console.log(reservation);
    setConfirmReservation(false);
  };

  const openingHour = 9; // Opening time: 9:00 AM
  const closingHour = 23; // Closing time: 11:00 PM

  // Generate time slots for today after the current time
  const generateTimeSlots = (isToday: boolean) => {
    const currentHour = new Date().getHours();
    const startHour = isToday ? currentHour + 1 : openingHour;
    const timeOptions = [];
    for (let hour = startHour; hour <= closingHour; hour++) {
      timeOptions.push(`${hour}:00`);
      timeOptions.push(`${hour}:30`);
    }
    return timeOptions;
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
    const timeOptions = generateTimeSlots(true);
    setTimes(timeOptions);
  }, []);

  useEffect(() => {
    if (
      dates.length > 0 &&
      times.length > 0 &&
      reservation.date === "" &&
      reservation.time === ""
    ) {
      setReservation({ ...reservation, date: dates[0], time: times[0] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates, times]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (confirmReservation) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setConfirmReservation(false);
            return 300;
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else {
      setTimer(300);
    }
    return () => clearInterval(interval);
  }, [confirmReservation]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex items-center justify-center paddingX paddingY relative">
      <Sign direction="left" />
      <div className="flex flex-col items-center justify-center gap-10 bg-black text-center border border-golden/20 p-8 shadow-golden/10 shadow-lg w-full lg:w-auto">
        <div>
          <SubHeading direction="center" title="Reservations" />
          <h2 className="h2_title">Book A Table</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 text-grey text-left text-sm w-full">
          <Select
            label="People"
            options={people}
            onChange={(value) =>
              setReservation({ ...reservation, people: value })
            }
          />
          {dates.length > 0 && (
            <Select
              label="Date"
              options={dates}
              onChange={(value) => {
                setReservation({ ...reservation, date: value });
                setTimes(
                  generateTimeSlots(
                    value === new Date().toISOString().split("T")[0]
                  )
                );
              }}
            />
          )}
          {times.length > 0 && (
            <Select
              label="Time"
              options={times}
              onChange={(value) =>
                setReservation({ ...reservation, time: value })
              }
            />
          )}
        </div>
        <button
          className=" bg-golden hover:bg-crimson font-base font-bold tracking-wider leading-5 text-base py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer text-black"
          onClick={() => setConfirmReservation(true)}
        >
          Book Now
        </button>
      </div>
      {confirmReservation && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10" />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black border border-golden/20 p-8 shadow-golden/10 shadow-lg">
            <div className="flex flex-col gap-6 text-center">
              <h2 className="h2_title">Confirm Reservation</h2>
              <p className="text-grey text-sm -mt-2">
                Confirm your reservation for{" "}
                <span className="font-semibold text-crimson">
                  {reservation.people}
                </span>{" "}
                on{" "}
                <span className="font-semibold text-crimson">
                  {reservation.date}
                </span>{" "}
                at{" "}
                <span className="font-semibold text-crimson">
                  {reservation.time > "12"
                    ? `${reservation.time} PM`
                    : `${reservation.time} AM`}
                </span>
                .
              </p>
              <p className="text-grey text-sm">
                Your reservation will be held for{" "}
                <span className="font-semibold text-crimson">
                  {formatTime(timer)}
                </span>{" "}
                {timer <= 60 ? "seconds" : timer > 120 ? "minutes" : "minute"}
              </p>
              <div className="flex gap-2 justify-evenly items-center">
                <button
                  className="bg-golden hover:bg-crimson font-base font-bold tracking-wider leading-5 text-base py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer text-black"
                  onClick={handleBookNow}
                >
                  Confirm
                </button>
                <button
                  className="bg-crimson hover:bg-crimson/80 font-base font-bold tracking-wider leading-5 text-base py-2 px-6 rounded-[1px] border-none outline-none cursor-pointer text-black"
                  onClick={() => setConfirmReservation(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Reservations;
