//React
import React, {createContext, useState} from 'react';

//Utils
import {
  visiblePickerData,
  deleteRequestPickerData,
} from '../home/screens/CreateSearchRequest/Utils/CreateSearchRequest.utils';

const initialState = {
  pickedImage: null,
  title: '',
  description: '',
  people: 1,
  category: '#',
  date: '',
  hour: '',
  onlineSwitch: false,
  onlineDescription: '',
  place: '',
  freeSwitch: false,
  paidSwitch: false,
  allowCommentsCheck: true,
  showParticipantsCheck: false,
  publicationDate: new Date(),
  visibility: visiblePickerData[0].value,
  deleteRequest: deleteRequestPickerData[0].value,
};

const CreateSearchRequestContext = createContext(initialState);

const CreateSearchRequestProvider = props => {
  //State to step one
  const [pickedImage, setPickedImage] = useState(initialState.pickedImage);
  const [title, setTitle] = useState(initialState.title);
  const [description, setDescription] = useState(initialState.description);
  const [people, setPeople] = useState(initialState.people);
  const [category, setCategory] = useState(initialState.category);
  //State to step two
  const [date, setDate] = useState(initialState.date);
  const [hour, setHour] = useState(initialState.hour);
  const [onlineSwitch, setOnlineSwitch] = useState(initialState.onlineSwitch);
  const [onlineDescription, setOnlineDescription] = useState(
    initialState.onlineDescription,
  );
  const [place, setPlace] = useState(initialState.place);
  const [freeSwitch, setFreeSwitch] = useState(initialState.freeSwitch);
  const [paidSwitch, setPaidSwitch] = useState(initialState.paidSwitch);
  //State to step three
  const [allowCommentsCheck, setAllowCommentsCheck] = useState(
    initialState.allowCommentsCheck,
  );
  const [showParticipantsCheck, setShowParticipantsCheck] = useState(
    initialState.showParticipantsCheck,
  );
  const [publicationDate, setPublicationDate] = useState(
    initialState.publicationDate,
  );
  const [visibility, setVisibility] = useState(initialState.visibility);
  const [deleteRequest, setDeleteRequest] = useState(
    initialState.deleteRequest,
  );

  const cleanData = () => {
    setPickedImage(null);
    setTitle('');
    setDescription('');
    setPeople(0);
    setCategory('#');
    setDate('');
    setHour('');
    setOnlineSwitch(false);
    setFreeSwitch(false);
    setPaidSwitch(false);
    setAllowCommentsCheck(false);
    setShowParticipantsCheck(false);
    setPublicationDate(new Date());
    setVisibility(visiblePickerData[0].value);
    setDeleteRequest(deleteRequestPickerData[0].value);
  };

  return (
    <CreateSearchRequestContext.Provider
      value={{
        pickedImage,
        setPickedImage,
        title,
        setTitle,
        description,
        setDescription,
        people,
        setPeople,
        category,
        setCategory,
        date,
        setDate,
        hour,
        setHour,
        onlineSwitch,
        setOnlineSwitch,
        onlineDescription,
        setOnlineDescription,
        place,
        setPlace,
        freeSwitch,
        setFreeSwitch,
        paidSwitch,
        setPaidSwitch,
        allowCommentsCheck,
        setAllowCommentsCheck,
        showParticipantsCheck,
        setShowParticipantsCheck,
        publicationDate,
        setPublicationDate,
        visibility,
        setVisibility,
        deleteRequest,
        setDeleteRequest,
        cleanData,
      }}>
      {props.children}
    </CreateSearchRequestContext.Provider>
  );
};

export {CreateSearchRequestContext, CreateSearchRequestProvider};
