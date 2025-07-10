import axios from "axios";
import { API_BASE_URL } from ".";

export const uploadMultipleImagesToS3 = async (files) => {
    // Get pre-signed URLs from backend
    const { data } = await axios.post(API_BASE_URL+"/bucket/presigned-urls", {
      files: files.map((file) => ({
        fileType: file.type
      }))
    });
  
    const uploadedImages = [];
  
    await Promise.all(
      data.uploads.map(async (upload, index) => {
        const formData = new FormData();
        Object.entries(upload.fields).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append("file", files[index]);
  
        await axios.post(upload.url, formData);
  
        uploadedImages.push({
          url: `${upload.url}/${upload.fields.key}`,
          fileName: upload.fileName,
          key: upload.key
        });
      })
    );
  
    return uploadedImages;
  };

export const uploadImageToS3 = async (file) => {
  const { data } = await axios.get(`/api/upload/presigned-url`, {
    params: { fileType: file.type }
  });

  const formData = new FormData();
  Object.entries(data.fields).forEach(([key, value]) => {
    formData.append(key, value);
  });
  formData.append("file", file);

  await axios.post(data.url, formData); // upload directly to S3

  return {
    imageUrl: `${data.url}/${data.fields.key}`,
    fileName: data.fileName
  };
};

export const uploadResumeToS3 = async (file) => {
  // Get pre-signed URL from backend
  const { data } = await axios.post(`${API_BASE_URL}/bucket/presigned-urls`, {
    files: [{
      fileType: file.type,
      category: "resumes"  // Add category to distinguish resume uploads
    }]
  });

  if (!data.uploads || data.uploads.length === 0) {
    throw new Error("Failed to get pre-signed URL");
  }

  const upload = data.uploads[0];
  const formData = new FormData();
  
  // Append all required fields
  Object.entries(upload.fields).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  // Append the actual file
  formData.append("file", file);

  // Upload to S3
  await axios.post(upload.url, formData);

  // Return the public URL
  return `${upload.url}${upload.fields.key}`;
};