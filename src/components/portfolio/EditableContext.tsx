import { createContext, useContext, useState, type ReactNode } from "react";
import { Upload } from "lucide-react";

type Ctx = {
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  resumeUrl: string | null;
  resumeName: string | null;
  setResume: (url: string | null, name?: string | null) => void;
};
const EditCtx = createContext<Ctx>({
  editMode: false,
  setEditMode: () => {},
  resumeUrl: null,
  resumeName: null,
  setResume: () => {},
});

export function EditProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [resumeName, setResumeName] = useState<string | null>(null);
  const setResume = (url: string | null, name: string | null = null) => {
    setResumeUrl(url);
    setResumeName(name);
  };
  return (
    <EditCtx.Provider value={{ editMode, setEditMode, resumeUrl, resumeName, setResume }}>
      {children}
    </EditCtx.Provider>
  );
}

export const useEdit = () => useContext(EditCtx);

export function Editable({ as: Tag = "span", children, className }: { as?: any; children: ReactNode; className?: string }) {
  const { editMode } = useEdit();
  return (
    <Tag
      className={`${className ?? ""} ${editMode ? "editable" : ""}`}
      contentEditable={editMode}
      suppressContentEditableWarning
    >
      {children}
    </Tag>
  );
}

/**
 * Edit-mode-only upload control. Renders nothing when not in edit mode.
 * Uses a <label> + hidden <input> so it's safe to place inside or next to a <button>.
 */
export function UploadAction({
  id,
  accept,
  onFile,
  label = "Upload",
  className = "absolute top-2 right-2 z-20",
}: {
  id: string;
  accept: string;
  onFile: (url: string, file: File) => void;
  label?: string;
  className?: string;
}) {
  const { editMode } = useEdit();
  if (!editMode) return null;
  return (
    <>
      <label
        htmlFor={id}
        onClick={(e) => e.stopPropagation()}
        className={`${className} inline-flex items-center gap-1 rounded-md bg-violet/90 text-white text-[10px] font-mono px-2 py-1 cursor-pointer hover:bg-violet shadow-md`}
      >
        <Upload className="size-3" /> {label}
      </label>
      <input
        id={id}
        type="file"
        accept={accept}
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          onFile(URL.createObjectURL(f), f);
          e.currentTarget.value = "";
        }}
      />
    </>
  );
}
