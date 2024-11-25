"use client";
import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Page = ({ params }: { params: { roomId: string } }) => {
  const roomID: string = params.roomId;
  const meetingContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initializeMeeting = async () => {
      const appID: number = Number(process.env.NEXT_PUBLIC_APP_ID);
      const serverSecret: string = process.env.NEXT_PUBLIC_SECRET as string;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "Enter your name here"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: meetingContainerRef.current,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // For 1-on-1 calls, use ZegoUIKitPrebuilt.OneONoneCall.
        },
      });
    };

    initializeMeeting();
  }, [roomID]);

  return <div className="w-full h-screen" ref={meetingContainerRef}></div>;
};

export default Page;
