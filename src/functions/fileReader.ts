import legacy from 'legacy-encoding';

function readFile(file: File): Promise<string> {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise((resolve) => {
    reader.onload = (e) => {
      const text = legacy.decode(
        Buffer.from(e.target.result as ArrayBuffer),
        'cp437',
      );
      resolve(text);
    };
  });
}

export default readFile;
