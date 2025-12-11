import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AutoComplete from "@mui/material/Autocomplete";
import { FormControlLabel, Switch } from "@mui/material";

import "./main.css";

const borderStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1E1E1E",
    },
    "&:hover fieldset": {
      borderColor: "#1E1E1E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1E1E1E",
    }
  },
  "& .MuiInputLabel-root": {
    color: "#1E1E1E",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1E1E1E",
  }
}

interface FormData {
  name: string;
  phone: string;
  address: {
    city: string;
    street: string;
    house: string;
    apartment: string;
    elevator: boolean;
  };
  wishes: string[];
}

export function Main() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    address: {
      city: "",
      street: "",
      house: "",
      apartment: "",
      elevator: false,
    },
    wishes: [],
  });

  const predefinedCities = ["Kyiv", "Lviv", "Odessa", "Kharkiv"];
  const predefinedWishes = [
    "Lego set",
    "Plush toy",
    "New bike",
    "Chocolate",
    "Book",
  ];

  return (
    <>
      <div className="main_container">
        <div className="text_container">
          <h1>
            Submit Your Letter to Santa!
          </h1>
          <p>Just hopping you've been good this year</p>
        </div>
        <div className="content_wrapper">
          <div className="form_container">
            <h4>Let's fill in your info</h4>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={borderStyle}
            />
            <TextField
              label="Your Phone Number"
              variant="outlined"
              fullWidth
              sx={borderStyle}
            />

            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
              <AutoComplete
                options={predefinedCities}
                freeSolo
                onChange={(_, value) =>
                  setForm({
                    ...form,
                    address: { ...form.address, city: value || "" },
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} label="City" sx={{ width: "150px", ...borderStyle }} />
                )}
              />
              <TextField
                label="Street"
                fullWidth
                sx={{ width: "430px", ...borderStyle }}
                value={form.address.street}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, street: e.target.value },
                  })
                }
              />
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
              <TextField
                label="House"
                sx={{ width: "200px", ...borderStyle }}
                value={form.address.house}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, house: e.target.value },
                  })
                }
              />
              <TextField
                label="Apartment"
                sx={{ width: "160px", ...borderStyle }}
                value={form.address.apartment}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: { ...form.address, apartment: e.target.value },
                  })
                }
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={form.address.elevator}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        address: { ...form.address, elevator: e.target.checked },
                      })
                    }
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "red",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "green",
                      },
                      "& .MuiSwitch-track": {
                        backgroundColor: "#bbb",
                      },
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "#fff",
                      }
                    }}
                  />

                }
                label="Elevator available"
              />
            </div>

            <p>And most importantly, what's your greatest wish?</p>

            <AutoComplete
              multiple
              freeSolo
              options={predefinedWishes}
              value={form.wishes}
              onChange={(_, value) => setForm({ ...form, wishes: value })}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Add wishes"
                  sx={{ width: "100%", ...borderStyle }}
                />
              )}
            />

          </div>

          <div className="letter_container">
          </div>
        </div>

        <div className="background_forms">
          <img src="./tree.svg" alt="tree" className="tree_decoration" />
          <img src="./ho-ho-ho.svg" alt="ho-ho-ho" className="hohoho_decoration" />
        </div>
      </div>
    </>
  );
}
