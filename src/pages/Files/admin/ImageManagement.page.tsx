import { Action } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import Image from "../../../components/Image/Image";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import { ResourceKey, resourceThunkMap } from "../../../contexts/fetchMap";
import { AppDispatch } from "../../../contexts/store";
import useFetch from "../../../hooks/useFetch";
import { apiRequest } from "../../../services/apiService";
import { IFile, IFileApiData } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function ImageManagementPage() {
  const { id = "noID" } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const {
    key = "noKey",
    getDataEndPoint = "noEndPoint",
    updateDataEndPoint = "noEndPoint",
    deleteDataEndPoint = "noEndPoint",
  } = state || {};

  const { data, fetchData } = useFetch<IFileApiData>(
    `${getDataEndPoint}/${id}`,
    "GET",
    undefined,
    true
  );

  const [showUpload, setShowUpload] = useState(false);
  const [fileID, setFileID] = useState<string>("noID");
  const [files, setFiles] = useState<IFile[]>([]);

  useEffect(() => {
    if (data && data.statusCode === 1) {
      setFiles(data.data.files);
      if (data.data.files.length === 0) {
        const resourceThunk = resourceThunkMap[key as ResourceKey];
        if (resourceThunk) {
          dispatch(resourceThunk() as unknown as Action);
        }
      }
    } else {
      setFiles([]);
    }
  }, [data, dispatch, key]);

  const handleDelete = async (_id: string = "noID") => {
    try {
      await apiRequest(
        `${deleteDataEndPoint}?id=${id}&fileID=${_id}`,
        "DELETE",
        undefined,
        true
      );
      await fetchData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error deleting image:", err);
    }
  };

  const handleUpdate = async (_id: string = "noID") => {
    setFileID(_id);
    setShowUpload(true);
  };
  if (files && files?.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-8 text-center">
        Manage Images
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {files.map((file: IFile) => (
          <div
            key={file?._id || "noID"}
            className="relative rounded-lg overflow-hidden border border-gray-200 shadow-md group transition-all duration-300 hover:shadow-xl"
          >
            <Image
              imagePath={file?.publicFilePath || ""}
              className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105 opacity-100 animate-fadeIn"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 flex justify-between text-sm text-white">
              <button
                onClick={() => handleUpdate(file ? file._id : "noID")}
                className="hover:text-custom_orange_1"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(file ? file._id : "noID")}
                className="hover:text-red-400"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <UploadDocument
        isOpen={showUpload}
        onClose={() => setShowUpload(false)}
        endpoint={`${updateDataEndPoint}?id=${
          id ? id : "noID"
        }&fileID=${fileID}`}
        label="Upldate Image"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Only one file is allowed to upload (max. 5MB per file)"
        onSuccess={() => fetchData()}
      />
    </div>
  );
}
