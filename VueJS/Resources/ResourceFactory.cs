using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection;
using System.Resources;

namespace VueJS.Resources
{
    public static class ResourceFactory
    {
        public static string GetResource(CultureInfo targetCulture, string rsFileName)
        {
            string rsBaseName = $"VueJS.Resources.{rsFileName}";
            Dictionary<string, string> resources = new Dictionary<string, string>();
            ResourceSet resourceSet = null;
            var resourceManager = new ResourceManager(rsBaseName, Assembly.GetExecutingAssembly());
            resourceSet = resourceManager.GetResourceSet(targetCulture, true, true);
            IDictionaryEnumerator enumerator = resourceSet.GetEnumerator();
            while (enumerator.MoveNext())
            {
                resources.Add(enumerator.Key.ToString(), enumerator.Value.ToString());
            }

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            string json = JsonConvert.SerializeObject(resources, camelCaseFormatter);

            return json;
        }
    }
}
