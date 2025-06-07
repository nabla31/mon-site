import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardApp() {
  const [username, setUsername] = useState("");
  const [clickedUsers, setClickedUsers] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const trimmedUsername = username.trim();
    if (!clicked && trimmedUsername) {
      setClickedUsers(prev => [...prev, trimmedUsername]);
      setClicked(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg"
            disabled={clicked}
          />
          <Button onClick={handleClick} className="w-full" disabled={clicked}>
            Augmenter le compteur
          </Button>
        </CardContent>
      </Card>

      {clickedUsers.length > 0 && (
        <Card className="mt-6 w-full max-w-md">
          <CardContent className="p-6 text-center space-y-2">
            <div className="text-xl font-semibold">Dashboard</div>
            <div className="text-gray-700">Utilisateurs ayant cliqué :</div>
            <ul className="list-disc list-inside text-left">
              {clickedUsers.map((user, index) => (
                <li key={index}>{user}</li>
              ))}
            </ul>
            <div className="text-3xl font-bold mt-4">Total : {clickedUsers.length}</div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
