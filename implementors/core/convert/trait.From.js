(function() {var implementors = {};
implementors["relay_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"relay_common/enum.EventType.html\" title=\"enum relay_common::EventType\">EventType</a>&gt; for <a class=\"enum\" href=\"relay_common/enum.DataCategory.html\" title=\"enum relay_common::DataCategory\">DataCategory</a>","synthetic":false,"types":["relay_common::constants::DataCategory"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"relay_common/struct.Glob.html\" title=\"struct relay_common::Glob\">Glob</a>","synthetic":false,"types":["relay_common::utils::Glob"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_common/struct.Glob.html\" title=\"struct relay_common::Glob\">Glob</a>","synthetic":false,"types":["relay_common::utils::Glob"]}];
implementors["relay_config"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"relay_config/struct.ByteSize.html\" title=\"struct relay_config::ByteSize\">ByteSize</a>","synthetic":false,"types":["relay_config::byte_size::ByteSize"]}];
implementors["relay_general"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"relay_general/pii/struct.Pattern.html\" title=\"struct relay_general::pii::Pattern\">Pattern</a>","synthetic":false,"types":["relay_general::pii::config::Pattern"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/pii/struct.ReplaceRedaction.html\" title=\"struct relay_general::pii::ReplaceRedaction\">ReplaceRedaction</a>","synthetic":false,"types":["relay_general::pii::redactions::ReplaceRedaction"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"relay_general/processor/enum.ValueType.html\" title=\"enum relay_general::processor::ValueType\">ValueType</a>&gt; for <a class=\"enum\" href=\"relay_general/processor/enum.SelectorSpec.html\" title=\"enum relay_general::processor::SelectorSpec\">SelectorSpec</a>","synthetic":false,"types":["relay_general::processor::selector::SelectorSpec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"relay_general/protocol/enum.Context.html\" title=\"enum relay_general::protocol::Context\">Context</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.ContextInner.html\" title=\"struct relay_general::protocol::ContextInner\">ContextInner</a>","synthetic":false,"types":["relay_general::protocol::contexts::ContextInner"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.NativeImagePath.html\" title=\"struct relay_general::protocol::NativeImagePath\">NativeImagePath</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::NativeImagePath"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.DebugId.html\" title=\"struct relay_general::protocol::DebugId\">DebugId</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DebugId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["relay_general::protocol::debugmeta::DebugId"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.CodeId.html\" title=\"struct relay_general::protocol::CodeId\">CodeId</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":["relay_general::protocol::debugmeta::CodeId"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.ExtraValue.html\" title=\"struct relay_general::protocol::ExtraValue\">ExtraValue</a>","synthetic":false,"types":["relay_general::protocol::event::ExtraValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.Fingerprint.html\" title=\"struct relay_general::protocol::Fingerprint\">Fingerprint</a>","synthetic":false,"types":["relay_general::protocol::fingerprint::Fingerprint"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.LogEntry.html\" title=\"struct relay_general::protocol::LogEntry\">LogEntry</a>","synthetic":false,"types":["relay_general::protocol::logentry::LogEntry"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.Message.html\" title=\"struct relay_general::protocol::Message\">Message</a>","synthetic":false,"types":["relay_general::protocol::logentry::Message"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.HeaderName.html\" title=\"struct relay_general::protocol::HeaderName\">HeaderName</a>","synthetic":false,"types":["relay_general::protocol::request::HeaderName"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.HeaderName.html\" title=\"struct relay_general::protocol::HeaderName\">HeaderName</a>","synthetic":false,"types":["relay_general::protocol::request::HeaderName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.HeaderValue.html\" title=\"struct relay_general::protocol::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["relay_general::protocol::request::HeaderValue"]},{"text":"impl&lt;'_&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.HeaderValue.html\" title=\"struct relay_general::protocol::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["relay_general::protocol::request::HeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.FrameVars.html\" title=\"struct relay_general::protocol::FrameVars\">FrameVars</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::FrameVars"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"relay_general/protocol/struct.RawStacktrace.html\" title=\"struct relay_general::protocol::RawStacktrace\">RawStacktrace</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.Stacktrace.html\" title=\"struct relay_general::protocol::Stacktrace\">Stacktrace</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::Stacktrace"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"relay_general/protocol/struct.Stacktrace.html\" title=\"struct relay_general::protocol::Stacktrace\">Stacktrace</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.RawStacktrace.html\" title=\"struct relay_general::protocol::RawStacktrace\">RawStacktrace</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::RawStacktrace"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;T&gt;&gt;&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.PairList.html\" title=\"struct relay_general::protocol::PairList\">PairList</a>&lt;T&gt;","synthetic":false,"types":["relay_general::protocol::types::PairList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/ip/enum.IpAddr.html\" title=\"enum std::net::ip::IpAddr\">IpAddr</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.IpAddr.html\" title=\"struct relay_general::protocol::IpAddr\">IpAddr</a>","synthetic":false,"types":["relay_general::protocol::types::IpAddr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.LenientString.html\" title=\"struct relay_general::protocol::LenientString\">LenientString</a>","synthetic":false,"types":["relay_general::protocol::types::LenientString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.JsonLenientString.html\" title=\"struct relay_general::protocol::JsonLenientString\">JsonLenientString</a>","synthetic":false,"types":["relay_general::protocol::types::JsonLenientString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/datetime/struct.DateTime.html\" title=\"struct chrono::datetime::DateTime\">DateTime</a>&lt;<a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/offset/utc/struct.Utc.html\" title=\"struct chrono::offset::utc::Utc\">Utc</a>&gt;&gt; for <a class=\"struct\" href=\"relay_general/protocol/struct.Timestamp.html\" title=\"struct relay_general::protocol::Timestamp\">Timestamp</a>","synthetic":false,"types":["relay_general::protocol::types::Timestamp"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;T&gt;","synthetic":false,"types":["relay_general::types::annotated::Annotated"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;T&gt;","synthetic":false,"types":["relay_general::types::annotated::Annotated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.ErrorKind.html\" title=\"enum relay_general::types::ErrorKind\">ErrorKind</a>","synthetic":false,"types":["relay_general::types::meta::ErrorKind"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.ErrorKind.html\" title=\"enum relay_general::types::ErrorKind\">ErrorKind</a>","synthetic":false,"types":["relay_general::types::meta::ErrorKind"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.ErrorKind.html\" title=\"enum relay_general::types::ErrorKind\">ErrorKind</a>&gt; for <a class=\"struct\" href=\"relay_general/types/struct.Error.html\" title=\"struct relay_general::types::Error\">Error</a>","synthetic":false,"types":["relay_general::types::meta::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.55/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt; for <a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt;","synthetic":false,"types":["relay_general::types::annotated::Annotated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt; for <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.55/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt;&gt; for <a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.55/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","synthetic":false,"types":["serde_json::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt;&gt;&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;<a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>&gt;&gt;&gt; for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]}];
implementors["relay_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Context&lt;ServerErrorKind&gt;&gt; for <a class=\"struct\" href=\"relay_server/struct.ServerError.html\" title=\"struct relay_server::ServerError\">ServerError</a>","synthetic":false,"types":["relay_server::service::ServerError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()