import wolframalpha
import sys

# import pprint
# from apiclient.discovery import build
def callwolf():
    var_array = []
    app_id = "2UVHV8-E7J4WKLGWG"
    #print sys.path
    #print "hello"
     client = wolframalpha.Client(app_id)
     res = client.query(sys.argv[1])
      # #answer = next(res.results).text
     var_array.append(next(res.results).text)
     for x in var_array:
         print x

callwolf()
    # for pod in res.pods:
    #     for sub in pod.subpods:
    #         print sub
