initSidebarItems({"enum":[["BucketValue","The aggregated value of a metric bucket."],["DurationUnit","Time duration units used in [`MetricUnit::Duration`]."],["FractionUnit","Units of fraction used in [`MetricUnit::Fraction`]."],["InformationUnit","Size of information derived from bytes, used in [`MetricUnit::Information`]."],["MetricType","The type of a [`MetricValue`], determining its aggregation and evaluation."],["MetricUnit","The unit of measurement of a metric value."],["MetricValue","The typed value of a metric."]],"macro":[["dist","Creates a [`DistributionValue`] containing the given arguments."]],"struct":[["AggregateMetricsError","Any error that may occur during aggregation."],["Aggregator","A collector of [`Metric`] submissions."],["AggregatorConfig","Parameters used by the [`Aggregator`]."],["Bucket","An aggregation of metric values by the [`Aggregator`]."],["CustomUnit","Custom user-defined units without builtin conversion."],["DistributionIter","An iterator over distribution entries in a [`DistributionValue`]."],["DistributionValue","A distribution of values within a [`Bucket`]."],["DistributionValuesIter","An iterator over all individual values in a [`DistributionValue`]."],["FlushBuckets","A message containing a vector of buckets to be flushed."],["GaugeValue","A snapshot of values within a [`Bucket`]."],["InsertMetrics","A message containing a list of [`Metric`]s to be inserted into the aggregator."],["MergeBuckets","A message containing a list of [`Bucket`]s to be inserted into the aggregator."],["Metric","A single metric value representing the payload sent from clients."],["ParseBucketError","Error returned when parsing or serializing a [`Bucket`]."],["ParseMetricError","An error returned by [`Metric::parse`] and [`Metric::parse_all`]."],["ParseMetricUnitError","An error parsing a [`MetricUnit`] or one of its variants."],["ParseMetrics","Iterator over parsed metrics returned from [`Metric::parse_all`]."],["UnixTimestamp","A unix timestamp (full seconds elapsed since 1970-01-01 00:00 UTC)."]],"type":[["CounterType","Type used for Counter metric"],["DistributionType","Type of distribution entries"],["GaugeType","Type used for Gauge entries"],["SetType","Type used for set elements in Set metric"]]});