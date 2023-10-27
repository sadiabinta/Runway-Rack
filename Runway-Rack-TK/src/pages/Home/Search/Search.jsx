import React, { useEffect, useMemo, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebase.config";
import { debounce } from "@mui/material/utils";
import parse from "autosuggest-highlight/parse";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Container, CssBaseline } from "@mui/material";

const auth = getAuth(app);

function loadScript(src, position, id) {
  if (!position) {
    return;
  }
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}
const autocompleteService = { current: null };

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${
          import.meta.env.VITE_googleApiKey
        }&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 400),
    []
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup name="tripType" row>
          <FormControlLabel
            value="oneWay"
            control={<Radio color="primary" />}
            label="One Way"
            labelPlacement="end"
          />
          <FormControlLabel
            value="roundTrip"
            control={<Radio color="primary" />}
            label="Round Trip"
            labelPlacement="end"
          />
          <FormControlLabel
            value="multiCity"
            control={<Radio color="primary" />}
            label="Multi-City"
            labelPlacement="end"
          />
        </RadioGroup>

        <Box display={'flex'} justifyContent="space-between"my={2}>
        <Controller
          name="departure"
          control={control}
          render={({ field }) => (
            <Autocomplete
              id="google-map-demo"
              sx={{ width: 300 }}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.description
              }
              filterOptions={(x) => x}
              options={options}
              autoComplete
              includeInputInList
              filterSelectedOptions
              value={value}
              noOptionsText="No locations"
              onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Flying From"
                  fullWidth
                  {...field}
                />
              )}
              renderOption={(props, option) => {
                const matches =
                  option.structured_formatting.main_text_matched_substrings ||
                  [];

                const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match) => [
                    match.offset,
                    match.offset + match.length,
                  ])
                );

                return (
                  <li {...props}>
                    <Grid container alignItems="center">
                      <Grid item sx={{ display: "flex", width: 44 }}>
                        <LocationOnIcon sx={{ color: "text.secondary" }} />
                      </Grid>
                      <Grid
                        item
                        sx={{
                          width: "calc(100% - 44px)",
                          wordWrap: "break-word",
                        }}
                      >
                        {parts.map((part, index) => (
                          <Box
                            key={index}
                            component="span"
                            sx={{
                              fontWeight: part.highlight ? "bold" : "regular",
                            }}
                          >
                            {part.text}
                          </Box>
                        ))}
                        <Typography variant="body2" color="text.secondary">
                          {option.structured_formatting.secondary_text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </li>
                );
              }}
            />
          )}
        />
        <Controller
          name="arrival"
          control={control}
          render={({ field }) => (
            <Autocomplete
              id="google-map-demo"
              sx={{ width: 300 }}
              getOptionLabel={(option) =>
                typeof option === "string" ? option : option.description
              }
              filterOptions={(x) => x}
              options={options}
              autoComplete
              includeInputInList
              filterSelectedOptions
              value={value}
              noOptionsText="No locations"
              onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Flying To"
                  fullWidth
                  {...field}
                />
              )}
              renderOption={(props, option) => {
                const matches =
                  option.structured_formatting.main_text_matched_substrings ||
                  [];

                const parts = parse(
                  option.structured_formatting.main_text,
                  matches.map((match) => [
                    match.offset,
                    match.offset + match.length,
                  ])
                );

                return (
                  <li {...props}>
                    <Grid container alignItems="center">
                      <Grid item sx={{ display: "flex", width: 44 }}>
                        <LocationOnIcon sx={{ color: "text.secondary" }} />
                      </Grid>
                      <Grid
                        item
                        sx={{
                          width: "calc(100% - 44px)",
                          wordWrap: "break-word",
                        }}
                      >
                        {parts.map((part, index) => (
                          <Box
                            key={index}
                            component="span"
                            sx={{
                              fontWeight: part.highlight ? "bold" : "regular",
                            }}
                          >
                            {part.text}
                          </Box>
                        ))}
                        <Typography variant="body2" color="text.secondary">
                          {option.structured_formatting.secondary_text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </li>
                );
              }}
            />
          )}
        />
        </Box>


        <Box display="flex" justifyContent="space-between"my={2}>
          <Controller
            name="departingDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Departing Date"
                type="date"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="returningDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Returning Date"
                type="date"
                variant="outlined"
              />
            )}
          />
        </Box>

        <Box sx={{display:"flex",md: {direction:"column"}}}
        justifyContent="space-between"my={2}>
          <Controller
            name="adults"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Adults (18+)"
                type="number"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="kids"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Kids (2-17)"
                type="number"
                variant="outlined"
              />
            )}
          />
          <Controller
            name="children"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Children (0-2)"
                type="number"
                variant="outlined"
              />
            )}
          />
        </Box>

        <Grid item xs={12} sm={6}>
        <Controller
          name="travelClass"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={["Economy", "Business", "First Class"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Travel Class"
                  variant="outlined"
                />
              )}
            />
          )}
        />
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search Flight
        </Button>
      </form>
    </Container>
  );
};

export default Search;
