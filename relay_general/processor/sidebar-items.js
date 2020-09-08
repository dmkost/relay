initSidebarItems({"enum":[["BagSize","The maximum size of a databag."],["Chunk","A type for dealing with chunks of annotated text."],["MaxChars","The maximum length of a field."],["Pii","Whether an attribute should be PII-strippable/should be subject to datascrubbers"],["SelectorPathItem",""],["SelectorSpec",""],["ValueType","The (simplified) type of a value."]],"fn":[["estimate_size","Estimates the size in bytes this would be in JSON."],["estimate_size_flat","Estimates the size in bytes this would be in JSON, but does not recurse into objects or arrays."],["join_chunks","Concatenates chunks into a string and emits remarks for redacted sections."],["process_chunked_value","Splits the string into chunks, maps each chunk and then joins chunks again, emitting remarks along the process."],["process_value","Processes the value using the given processor."],["split_chunks","Chunks the given text based on remarks."]],"struct":[["FieldAttrs","Meta information about a field."],["Path","Represents the path in a structure"],["ProcessingState","Processing state passed downwards during processing."],["UnknownValueTypeError","Error for unknown value types."]],"trait":[["ProcessValue","A recursively processable value."],["Processor","A trait for processing processable values."]]});