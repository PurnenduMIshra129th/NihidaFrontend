import { Field, Formik } from "formik";
import { Form } from "react-router";

import Button from "../../../components/Button/Button";
import { eventBus } from "../../../contexts/context/eventBus";
import { apiClient } from "../../../services/axiosInstance";
import { getStorageItem } from "../../../utils/util";

// eslint-disable-next-line @typescript-eslint/naming-convention
function BackupImagePage() {
  const fetchData = async (folderKey: string) => {
    try {
      const token = getStorageItem("token")?.toString();
      const headers =
        token && token !== "" ? { Authorization: `Bearer ${token}` } : {};
      eventBus.emit({ type: "loader_start", message: "Loading..." });
      const response = await apiClient.get(
        `optimize/download-uploads/${folderKey}`,
        {
          responseType: "blob",
          headers,
        }
      );
      const blobUrl = window.URL.createObjectURL(response.data);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${folderKey}.zip`;
      a.click();
      window.URL.revokeObjectURL(blobUrl);

      eventBus.emit({ type: "success", message: "Download started." });
    } catch (error) {
      eventBus.emit({ type: "danger", message: "Download failed." });
      // eslint-disable-next-line no-console
      console.error("File Download Error:", error);
    } finally {
      eventBus.emit({ type: "loader_stop", message: "Loading stop..." });
    }
  };
  const keyArray = [
    "newsDir",
    "videoDir",
    "focusActivityDir",
    "upcomingEventDir",
    "documentDir",
    "galleryDir",
    "socialLinkAndCommonImageDir",
    "teamMemberDir",
    "partnerDir",
  ];

  return (
    <div className="max-w-xl mx-auto pt-[8rem] pb-16 px-4">
      <h1 className="text-2xl font-bold text-custom_orange_1 mb-6 text-center">
        Backup Image Fetcher
      </h1>

      <Formik
        initialValues={{ folderKey: "" }}
        onSubmit={async ({ folderKey }) => {
          if (folderKey) await fetchData(folderKey);
        }}
      >
        {({ handleSubmit }) => (
          <Form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800">
                Select Upload Folder
              </label>
              <Field
                as="select"
                name="folderKey"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="">-- Choose a folder --</option>
                {keyArray.map((folder) => (
                  <option key={folder} value={folder}>
                    {folder}
                  </option>
                ))}
              </Field>
            </div>

            <Button
              name="Fetch Images"
              className="w-full bg-custom_orange_1 text-white px-4 py-3"
              onClick={handleSubmit}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BackupImagePage;
